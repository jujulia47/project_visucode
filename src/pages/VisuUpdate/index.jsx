import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/UserUpdate/index.css";

function VisuUpdate() {
  const { setPage, searchUserInfo, setSearchUserInfo, logedUserInfo, setUpdateUser } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(logedUserInfo);
  
  const handleUpdate = (e) => {
    e.preventDefault();
    const searchValuePassword = e.target.password.value;
    const searchValueName = e.target.name.value;
    const searchValueEmail = e.target.email.value;

    const newSearchUserInfo = searchUserInfo;
    newSearchUserInfo.password = searchValuePassword;
    newSearchUserInfo.name = searchValueName;
    newSearchUserInfo.email = searchValueEmail;

    setSearchUserInfo(newSearchUserInfo);
    setUpdateUser(newSearchUserInfo);
  };

  return (
    <section className="login header">
      <h1>Editar</h1>
      <form onSubmit={(e) => handleUpdate(e)} action="" method="post" className="form_user">
        <div className="form">
          <label htmlFor="" className="form_label">
            *E-mail
            <input
              type="email"
              disabled
              id="email"
              value={inputValue.email}
              onChange={(e) => setInputValue({...inputValue, email: e.target.value})}
              placeholder="Digite seu e-mail"
              className="input_form email_disabled"
            />
          </label>
          <label htmlFor="" className="form_label">
            *Nome
            <input
              type="text"
              name="name"
              id="name"
              value={inputValue.name}
              onChange={(e) => setInputValue({...inputValue, name: e.target.value})}
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
              value={inputValue.password}
              onChange={(e) => setInputValue({...inputValue, password: e.target.value})}
              placeholder="Digite sua senha"
              className="input_form"
            />
          </label>
        </div>

        <div className="button_container">
          <button
            className="button_default save_button"
          >
            Salvar
          </button>

          <button
            className="button_default delete_button"
            onClick={() => setPage("userDelete")}
          >
            Excluir
          </button>
        </div>
      </form>
    </section>
  );
}

export default VisuUpdate;
