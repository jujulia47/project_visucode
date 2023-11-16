import React, { useContext } from "react";
import { AppContext } from "../../context";
import "../../styles/css/components/Header/index.css";

function Header() {
  const { setPage ,setSearchUserInfo } =
  useContext(AppContext);

  const logOut = (e) => {
    e.preventDefault();
    setSearchUserInfo({
      name: '',
      email: '',
      password: '',
      isAdmin: false,
    });
    setPage("bemVindo");
  };

  return (
    <>
    <header>
      <p className="header_user" >
        Sair <img src="/icons/sign_out.png" alt="" 
        onClick={(e) => logOut(e)} />
      </p>
    </header>
    </>
  );
}

export default Header;