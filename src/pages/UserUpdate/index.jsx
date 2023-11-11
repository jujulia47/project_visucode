import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/UserUpdate/index.css";

function UserUpdate() {
  const { 
    setPage,
    searchUser 
  } = useContext(AppContext);


  return (
    <>
      <section className="login header">
        <div className="img_block">
          <img src="/visucode_logo.png" alt="" className="img_logo" />
        </div>
        <form action="" method="post">

          <div className="create_email">
            <label htmlFor="" className="label_form_create">
              *E-mail
              <input
                type="email"
                disabled
                value={searchUser}
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
                name=""
                id=""
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
                id=""
                placeholder="Digite sua senha"
                className="input_form"
              />
            </label>
          </div>
        </form>
        <div className="button_container">
          <button
            className="button_default button_default login_button"
            onClick={() => window.alert("Salvado")}
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
      </section>
    </>
  );
}

export default UserUpdate;
