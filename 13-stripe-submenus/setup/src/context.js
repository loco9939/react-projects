import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocaion] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((sublink) => sublink.page === text);
    setPage(page);
    setLocaion(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => setIsSubmenuOpen(false);
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSubmenu,
        openSidebar,
        closeSubmenu,
        closeSidebar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
