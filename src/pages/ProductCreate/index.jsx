import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/ProductCreate/index.css";

function ProductCreate() {
  const [hasClicked, setHasCliked] = useState(false);
  console.log("hasClicked", hasClicked);

  const { setPage, setSearchProduct } = useContext(AppContext);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("textValue", e.target.searchValue.value);
    const searchValue = e.target.searchValue.value;

    setSearchProduct(searchValue);
    setPage("productUpdate");
  };

  return (
    <section className="productCreate">
      <div className="img_block">
        <img src="/photo.png" alt="" className="img_logo" />
      </div>
      <form action="" method="post">
        <div>
          <div className="form_name">
            <label htmlFor="" className="label_form_create">
              *Código de Barras
              <input
                type="number"
                name=""
                id=""
                // placeholder="Código de Barras"
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
                // placeholder="Digite seu nome"
                className="input_form"
              />
            </label>
          </div>
        </div>
        <div className="ingredientes">
          <label htmlFor="" className="label_form_create">
            *Ingredientes
            <textarea
              // placeholder="Enter comment..."
              maxlength="1000"
              minlength="500"
            />
          </label>
        </div>
        <div>
          <div className="create_password">
            <label htmlFor="" className="label_form_create">
              *Quantidade
              <input
                type="text"
                name=""
                id=""
                // placeholder="Quantidade"
                className="input_form"
              />
            </label>
          </div>
          <div className="create_password">
            <label htmlFor="" className="label_form_create">
              *Valor energético
              <input
                type="text"
                name=""
                id=""
                // placeholder="Valor energético"
                className="input_form"
              />
            </label>
          </div>
        </div>
        <div>
          <div className="create_password">
            <label htmlFor="" className="label_form_create">
              *Proteína
              <input
                type="text"
                name=""
                id=""
                // placeholder="Proteína"
                className="input_form"
              />
            </label>
          </div>
          <div className="create_password">
            <label htmlFor="" className="label_form_create">
              *Carboidrato
              <input
                type="text"
                name=""
                id=""
                // placeholder="Carboidrato"
                className="input_form"
              />
            </label>
          </div>
        </div>

        <div>
          <div className="create_password">
            <label htmlFor="" className="label_form_create">
              *Gorduras totais
              <input
                type="text"
                name=""
                id=""
                // placeholder="Gorduras totais"
                className="input_form"
              />
            </label>
          </div>
          <div className="create_password">
            <label htmlFor="" className="label_form_create">
              *Sódio
              <input
                type="text"
                name=""
                id=""
                // placeholder="Sódio"
                className="input_form"
              />
            </label>
          </div>
        </div>
      </form>
      <div className="button_container">
        <button
          className="button_default login_button"
          onClick={() => setPage("visuRead")}
        >
          Salvar
        </button>
        {!hasClicked ? (
          <button
            className="button_default form_button"
            onClick={() => setHasCliked(true)}
          >
            Buscar Produtos
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
              placeholder="789100829922"
              className="input_form"
              type="text"
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

export default ProductCreate;
