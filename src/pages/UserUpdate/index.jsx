import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/UserUpdate/index.css";

function UserUpdate() {

  const { 
    searchUserInfo,
    setSearchUserInfo,
    setUpdateUser
  } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(searchUserInfo.name)


  const handleUpdate = (e) => {
    e.preventDefault()

    const searchValuePassword = e.target.password.value
    const searchValueName = e.target.name.value

    const newSearchUserInfo = searchUserInfo
    newSearchUserInfo.password = searchValuePassword
    newSearchUserInfo.name = searchValueName

    setSearchUserInfo(newSearchUserInfo)
    setUpdateUser(newSearchUserInfo)
  }

  return (
    <section className="login header">
      <div className="img_block">
        <img src="/visucode_logo.png" alt="" className="img_logo" />
      </div>
      <form onSubmit={e => handleUpdate(e)} action="" method="post">

        <div className="create_email">
          <label htmlFor="" className="label_form_create">
            *E-mail
            <input
              type="email"
              disabled
              id="email"
              value={searchUserInfo && searchUserInfo.email}
              placeholder="Digite seu e-mail"
              className="input_form email_disabled"
            />
          </label>
        </div>
        <div className="form_name">
          <label htmlFor="" className="label_form_create">
            *Nome
            <input
              type="text"
              name="name"
              id="name"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder="Digite seu nome"
              className="input_form"
            />
          </label>
        </div>
        <div className="create_password">
          <label htmlFor="" className="label_form_create">
            *Senha
            <input
              type="password"
              name=""
              id="password"
              value={searchUserInfo && searchUserInfo.password}
              placeholder="Digite sua senha"
              className="input_form"
            />
          </label>
        </div>
        <div className="button_container">
          <button
            className="button_default button_default login_button"
          >
            Salvar
          </button>

          <button
            className="button_default delete_button"
            onClick={() => window.alert("excluído")}
          >
            Excluir
          </button>
        </div>
      </form>
    </section>
  );
}

export default UserUpdate;
