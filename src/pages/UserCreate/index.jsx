import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/UserCreate/index.css";

function UserCreate() {
  const [hasClicked, setHasCliked] = useState(false)
  console.log("hasClicked", hasClicked);

  const { 
    setPage,
    setSearchUser 
  } = useContext(AppContext);

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("textValue", e.target.searchValue.value);
    const searchValue =  e.target.searchValue.value

    setSearchUser(searchValue)
    setPage("userUpdate")
  }
  
    return (
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
                  name=""
                  id=""
                  placeholder="Digite seu e-mail"
                  className="input_form"
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
              className="button_default login_button"
              onClick={() => setPage("visuRead")}
            >
              Salvar
            </button>
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
