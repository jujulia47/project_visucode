import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/LoginCreate/index.css";

function LoginCreate() {
  const [hasClicked, setHasCliked] = useState(false)

  const { 
    setPage,
    searchUserInfo,
    setSearchUserInfo,
    setSearchUser,
    setCreateUser
  } = useContext(AppContext);

  const handleSearch = (e) => {
    e.preventDefault()

    const searchValue =  e.target.searchValue.value
    const newSearchUserInfo = searchUserInfo
    newSearchUserInfo.email = searchValue

    setSearchUserInfo(newSearchUserInfo)
    setSearchUser(newSearchUserInfo)

    setPage("userUpdate")
  }

  const handleCreate = (e) => {
    e.preventDefault()

    console.log("e_target", e.target.name);

    setSearchUserInfo({
      "name": e.target.name.value,
      "email": e.target.email.value,
      "password": e.target.password.value,
      "isAdmin": false,
    });

    setCreateUser("searchUserInfosetSearchUserInfo")
  }

  return (
    <>
      <section className="login header">
        <h1>Cadastre-se</h1>

      <form onSubmit={e => handleCreate(e)} action="" method="post" className="form_user">
        <div className="form">
          <label htmlFor="" className="form_label">
            *E-mail
            <input
              type="email"
              name=""
              id="email"
              placeholder="Digite seu e-mail"
              className="input_form"
            />
          </label>
          <label htmlFor="" className="form_label">
            *Nome
            <input
              type="text"
              name=""
              id="name"
              placeholder="Digite seu nome"
              className="input_form"
            />
          </label>
          <label htmlFor="" className="form_label">
            *Senha
            <input
              type="password"
              name=""
              id="password"
              placeholder="Digite sua senha"
              className="input_form"
            />
          </label>
        </div>
      
      <div className="button_container">
        <button
          className="button_default add_button"
        >
          Adicionar
        </button>
      </div>
      </form>
    </section>
    </>
  );
}

export default LoginCreate;
