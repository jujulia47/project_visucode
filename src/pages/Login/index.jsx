import React, { useContext } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/Login/index.css";

function Login() {
  const { setPage } = useContext(AppContext);

  return (
    <>
      <section className="login">
        <div className="img_block">
          <img src="/visucode_logo.png" alt="" className="img_logo" />
        </div>
        <form action="" method="get">
          <div className="form_email">
            <label htmlFor="" className="label_form">
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
          <div className="form_password">
            <label htmlFor="" className="label_form">
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
        <p className="reset_password">
          <a href="#">Esqueci minha senha</a>
        </p>
        <div className="button_container">
          <input
            type="button"
            value="Entrar"
            className="button_default login_button"
            onClick={() => setPage("visuRead")}
          />
        </div>
      </section>
    </>
  );
}

export default Login;
