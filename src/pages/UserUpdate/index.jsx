import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/UserUpdate/index.css";

function UserUpdate() {
  const { searchUserInfo, setSearchUserInfo, setUpdateUser, setDeleteUser } =
    useContext(AppContext);
  const [inputValue, setInputValue] = useState(searchUserInfo);
  const [showModal, setShowModal] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();

    const searchValuePassword = e.target.password.value;
    const searchValueName = e.target.name.value;
    const searchValueIsAdmin = e.target.isAdmin.value === "true";

    const newSearchUserInfo = searchUserInfo;
    newSearchUserInfo.name = searchValueName;
    newSearchUserInfo.password = searchValuePassword;
    newSearchUserInfo.isAdmin = searchValueIsAdmin;


    setSearchUserInfo(newSearchUserInfo);
    setUpdateUser(newSearchUserInfo);

    setInputValue({
      email: "",
      name: "",
      password: "",
      isAdmin: "",
    });
  };

  return (
    <>
      <section className="login header">
        <h1>Editar Usuário</h1>
        <form
          onSubmit={(e) => handleUpdate(e)}
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
                disabled
                id="email"
                value={searchUserInfo && searchUserInfo.email}
                placeholder="Digite seu e-mail"
                className="input_form email_disabled"
              />
            </label>
            <label htmlFor="" className="form_label">
              *Nome
              <input
                required
                type="text"
                name="name"
                id="name"
                value={inputValue.name}
                onChange={(e) =>
                  setInputValue({ ...inputValue, name: e.target.value })
                }
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
                value={inputValue.password}
                onChange={(e) =>
                  setInputValue({ ...inputValue, password: e.target.value })
                }
                placeholder="Digite sua senha"
                className="input_form"
              />
            </label>
            <div className="checkbox_container">
              <div className="checkbox">
                <input
                  className="checkbox_form"
                  type="radio"
                  name="isAdmin"
                  id="isAdmin"
                  value="true"
                />
                <label className="form_label" for="isAdmin" htmlFor="">
                  Administrador
                </label>
              </div>
              <div className="checkbox">
                <input
                  className="checkbox_form"
                  type="radio"
                  name="isAdmin"
                  value="false"
                  id="isNotAdmin"
                />
                <label className="form_label" for="isNotAdmin" htmlFor="">
                  Usuário
                </label>
              </div>
            </div>
          </div>
          <div className="button_container">
            <button className="button_default save_button">Salvar</button>
          </div>
        </form>
        <button
          className="button_default delete_button"
          onClick={() => setShowModal(!showModal)}
        >
          Excluir
        </button>
      </section>

      {showModal ? (
        <section className="modal">
          <div className="alert">
            <img src="/icons/warning.png" alt="warning" />
            <p>Deseja excluir este usuário?</p>
          </div>
          <div className="button_container">
            <button
              className="button_default delete_button"
              onClick={() => setDeleteUser(Math.random())}
            >
              Sim
            </button>
            <button
              className="button_default add_button"
              onClick={() => setShowModal(!showModal)}
            >
              Não
            </button>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default UserUpdate;
