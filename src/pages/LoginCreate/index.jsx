import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/LoginCreate/index.css";

function LoginCreate() {

  const {
    setPage,
    setSearchUserInfo,
    setCreateUser,
  } = useContext(AppContext);

  const handleCreate = (e) => {
    e.preventDefault();

    setSearchUserInfo({
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      isAdmin: false,
    });

    setPage("visuRead")
    setCreateUser(Math.random());
  };

  return (
    <>
      <section className="login header">
        <h1>Cadastre-se</h1>

        <form
          onSubmit={(e) => handleCreate(e)}
          action=""
          method="post"
          className="form_user"
        >
          <div className="form">
            <label htmlFor="" className="form_label">
              *E-mail
              <input
                required
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
                required
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
                required
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
              // onClick={() => setPage("visuRead")}
            >
              Adicionar
            </button>
            <button
            className="button_default cancel_button"
            onClick={() => setPage("menuLogin")}
          >
            Cancelar
          </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default LoginCreate;
