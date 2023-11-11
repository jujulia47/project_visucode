import React, { createContext, useContext, useState, useEffect } from "react";

export const AppContext = createContext({} as any);

export const AppProvider = ({ children }: any) => {
  const [page, setPage] = useState("bemVindo");
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchUser, setSearchUser] = useState(false);
  const [searchProduct, setSearchProduct] = useState(false);


  useEffect(() => {
    setIsAdmin(true)
  }, [])


  return (
    <AppContext.Provider
      value={{
        page,
        setPage,
        isAdmin,
        searchUser, 
        setSearchUser,
        searchProduct,
        setSearchProduct
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
