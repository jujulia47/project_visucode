import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/Login/index.css";

function Login() {
  const { setPage, setEmail } = useContext(AppContext);
  // const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const searchValue = e.target.userEmail.value;

    console.log("searchValue", searchValue);
    setEmail(searchValue);
    setPage("visuRead");
  };

  const eyeIcon = 'imagem aqui'

  return (
    <>
      <section className="login">
        <div className="img_block">
          <img src="/visucode_logo.png" alt="" className="img_logo" />
        </div>

        <form onSubmit={(e) => handleLogin(e)} action="" method="get">
          <div className="form">
            <div className="form_email">
              <label htmlFor="" className="form_label">
                *E-mail
                <input
                  required
                  type="email"
                  name=""
                  id="userEmail"
                  placeholder="Digite seu e-mail"
                  className="input_form"
                />
              </label>
            </div>
            <div className="form_password">
              <label htmlFor="" className="form_label">
                *Senha
                <input
                  required
                  type="password"
                  name=""
                  id=""
                  placeholder={`Digite sua senha ${eyeIcon}`}
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
          <div className="button_login">
            <button className="button_default add_button">Entrar</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
