import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/UserCreate/index.css";

function UserCreate() {
  const [hasClicked, setHasCliked] = useState(false)

  const { 
    setPage,
    searchUserInfo,
    setSearchUserInfo,
    setSearchUser,
    setCreateUser
  } = useContext(AppContext);

  const handleSearch = (e) => {
    e.preventDefault()

    const searchValue =  e.target.searchValue.value
    const newSearchUserInfo = searchUserInfo
    newSearchUserInfo.email = searchValue

    setSearchUserInfo(newSearchUserInfo)
    setSearchUser(newSearchUserInfo)

    setPage("userUpdate")
  }


  const handleCreate = (e) => {
    e.preventDefault()

    console.log("e_target", e.target.name);

    setSearchUserInfo({
      "name": e.target.name.value,
      "email": e.target.email.value,
      "password": e.target.password.value,
      "isAdmin": false,
    });

    setCreateUser("searchUserInfosetSearchUserInfo")
  }
  
  return (
    <section className="login header">
      <div className="img_block">
        <img src="/visucode_logo.png" alt="" className="img_logo" />
      </div>
      <form onSubmit={e => handleCreate(e)} action="" method="post">
        <label htmlFor="" className="label_form_create">
          *E-mail
          <input
            type="email"
            name=""
            id="email"
            placeholder="Digite seu e-mail"
            className="input_form"
          />
        </label>
        <label htmlFor="" className="label_form_create">
          *Nome
          <input
            type="text"
            name=""
            id="name"
            placeholder="Digite seu nome"
            className="input_form"
          />
        </label>
        <label htmlFor="" className="label_form_create">
          *Senha
          <input
            type="password"
            name=""
            id="password"
            placeholder="Digite sua senha"
            className="input_form"
          />
        </label>
      
      <div className="button_container">
        <button
          className="button_default login_button"
        >
          Salvar
        </button>
      </div>

      </form>
      <div className="button_container">
        {!hasClicked ? (<button
          className="button_default form_button"
          onClick={() => setHasCliked(true)}
        >
          Buscar Usuarios 
        </button>) : (
            <form className="container_search"  action="" method="post" onSubmit={e => handleSearch(e)}>
            <input id="searchValue" placeholder="jujulia@gmail.com" className="input_form" type="email"   />
            <button><img className="search__image" src="/icons/search.png" alt="" /></button>
          </form >
        )}
      </div>
    </section>
  );
}

export default UserCreate;
