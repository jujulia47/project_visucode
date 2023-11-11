import React, { useContext } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/LoginCreate/index.css";

function LoginCreate() {
  const { setPage } = useContext(AppContext);

  return (
    <>
      <section className="login">
        <div className="img_block">
          <img src="/visucode_logo.png" alt="" className="img_logo" />
        </div>
        <form action="" method="post">
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
          <div className="create_email">
            <label htmlFor="" className="label_form_create">
              *E-mail
              <input
                type="email"
                name=""
                id=""
                placeholder="Digite seu e-mail"
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
          <input
            type="button"
            value="Salvar"
            className="button_default login_button"
            onClick={() => setPage("visuRead")}
          />
        </div>
        <div className="button_container">
          <input
            type="button"
            value="Cancelar"
            className="cancel_button"
            onClick={() => setPage("menuLogin")}
          />
        </div>
      </section>
    </>
  );
}

export default LoginCreate;
