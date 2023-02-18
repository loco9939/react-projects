const getTotal = (state) => {
  let { total, amount } = state.cart.reduce(
    (cartTotal, cartItem) => {
      const { price, amount } = cartItem;
      const itemTotal = price * amount;
      cartTotal.amount += amount;
      cartTotal.total += itemTotal;
      return cartTotal;
    },
    { total: 0, amount: 0 }
  );
  total = parseFloat(total.toFixed(2));
  return { ...state, total, amount };
};
const toggleAmount = (state, payload) => {
  let tempCart = state.cart
    .map((cartItem) =>
      cartItem.id === payload.id
        ? payload.type === "inc"
          ? { ...cartItem, amount: cartItem.amount + 1 }
          : { ...cartItem, amount: cartItem.amount - 1 }
        : cartItem
    )
    .filter((cartItem) => cartItem.amount !== 0);
  return { ...state, cart: tempCart };
};
const removeItem = (state, payload) => {
  return {
    ...state,
    cart: state.cart.filter((cartItem) => cartItem.id !== payload),
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE":
      return removeItem(state, action.payload);
    case "GET_TOTALS":
      return getTotal(state);
    case "LOADING":
      return { ...state, loading: true };
    case "DISPLAY_ITEMS":
      return { ...state, cart: action.payload, loading: false };
    case "TOGGLE_AMOUNT":
      return toggleAmount(state, action.payload);
    default:
      throw new Error("no matching action type");
  }
};

export default reducer;
