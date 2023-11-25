import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/UserUpdate/index.css";

function UserUpdate() {
  //estados declarados no contexto
  const { setPage, searchUserInfo, setSearchUserInfo, setUpdateUser, setDeleteUser } =
    useContext(AppContext);

  //ESTADOS
  const [inputValue, setInputValue] = useState(searchUserInfo);

  //modal para excluir usuário
  const [showModal, setShowModal] = useState(false);

  //Atualizar infos do usuário
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

    //limpar input
    alert('Cadastro atualizado')
    setInputValue({
      email: "",
      name: "",
      password: "",
      isAdmin: "",
    });
  };

  //excluir usuário
  const handleDelete = () => {
    alert('Usuário excluído!')
    setDeleteUser(Math.random())
    setShowModal(!showModal)
    setPage('userCreate')
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
        <section className="background-modal ">
          <div className="modal ">
            <div className="alert">
              <img src="/icons/warning.png" alt="warning" />
              <p>Deseja excluir este usuário?</p>
            </div>
            <div className="button_container">
              <button
                className="button_default delete_button"
                onClick={() => handleDelete()}
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
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default UserUpdate;
