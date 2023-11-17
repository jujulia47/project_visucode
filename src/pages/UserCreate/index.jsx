import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/UserCreate/index.css";

function UserCreate() {
  const [hasClicked, setHasCliked] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
    name: "",
    password: "",
  });

  const {
    setPage,
    searchUserInfo,
    setSearchUserInfo,
    setSearchUser,
    setCreateUser,
  } = useContext(AppContext);

  const handleSearch = (e) => {
    e.preventDefault();

    const searchValue = e.target.searchValue.value;
    const newSearchUserInfo = searchUserInfo;
    newSearchUserInfo.email = searchValue;

    setSearchUserInfo(newSearchUserInfo);
    setSearchUser(newSearchUserInfo.email);

    setTimeout(() => {
      setPage("userUpdate");
    }, 200);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const searchValueIsAdmin = e.target.isAdmin.value === "true";

    setSearchUserInfo({
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      isAdmin: searchValueIsAdmin,
    });

    setCreateUser(Math.random());
    alert("Novo usuário cadastrado!")
    setInputValue({
      email: "",
      name: "",
      password: "",
    });

  };

  return (
    <section className="login header">
      <h1>Cadastrar Usuário</h1>
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
              value={inputValue.email}
              onChange={(e) =>
                setInputValue({ ...inputValue, email: e.target.value })
              }
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
                value= "true"
              />
              <label className="form_label" htmlFor="">
                Administrador
              </label>
            </div>
            <div className="checkbox">
              <input
                className="checkbox_form"
                type="radio"
                name="isAdmin"
                value= "false"
                id="isNotAdmin"
              />
              <label className="form_label" htmlFor="">
                Usuário
              </label>
            </div>
          </div>
        </div>

        <div className="button_container">
          <button className="button_default add_button">Adicionar</button>
        </div>
      </form>
      <div className="button_container">
        {!hasClicked ? (
          <button
            className="button_default cancel_button"
            onClick={() => setHasCliked(true)}
          >
            Buscar Usuarios
          </button>
        ) : (
          <form
            className="container_search"
            action=""
            method="post"
            onSubmit={(e) => handleSearch(e)}
          >
            <input
              id="searchValue"
              placeholder="user@gmail.com"
              className="input_form"
              type="email"
            />
            <button>
              <img className="search__image" src="/icons/search.png" alt="" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default UserCreate;
