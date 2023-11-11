import React, { useContext } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/Login/index.css";

function Login() {
  const { setPage, setEmail } = useContext(AppContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const searchValue = e.target.userEmail.value;

    setEmail(searchValue);
    setPage("visuRead");
  };

  return (
    <>
      <section className="login">
        <div className="img_block">
          <img src="/visucode_logo.png" alt="" className="img_logo" />
        </div>
        <form onSubmit={(e) => handleLogin(e)} action="" method="get">
          <div className="form">
            <div className="form_email">
              <label htmlFor="" className="label_form">
                *E-mail
                <input
                  type="email"
                  name=""
                  id="userEmail"
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
          </div>
          <div className="reset">
            <p className="reset_password">
              <a href="#">Esqueci minha senha</a>
            </p>
          </div>
          <div className="button_container">
            <button className="button_default login_button">Entrar</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
