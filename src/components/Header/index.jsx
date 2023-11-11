import React, { useContext } from "react";
import { AppContext } from "../../context";
import "../../styles/css/components/Header/index.css";

function Header() {
  const { isAdmin } = useContext(AppContext);
  return (
    <>
    <header>
    <p className="header_user" >
      {isAdmin ? 'Olá, Admin' : 'Olá, Érika'}
      {isAdmin ? <img src="/icons/user_admin.png" alt="" /> : <img src="/icons/user.png" alt="" />}
      
    </p>
    </header>
    </>
  );
}

export default Header;