import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section className="tours">
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      {tours.map((tour) => (
        <Tour key={tour.id} removeTour={removeTour} {...tour} />
      ))}
    </section>
  );
};

export default Tours;
