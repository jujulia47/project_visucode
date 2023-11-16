import React, { useContext } from "react";
import { AppContext } from "../../context";
import "../../styles/css/components/Header/index.css";

function Header() {
  return (
    <>
    <header>
      <p className="header_user" >
        Sair <img src="/icons/sign_out.png" alt="" />
      </p>
    </header>
    </>
  );
}

export default Header;