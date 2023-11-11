import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/ProductCreate/index.css";

function ProductCreate() {
  const [hasClicked, setHasCliked] = useState(false);
  console.log("hasClicked", hasClicked);

  const { 
    setPage, 
    searchProductInfo,
    setSearchProductInfo,
    setSearchProduct
   } = useContext(AppContext);

   const handleSearch = (e) => {
    e.preventDefault()

    const searchValue =  e.target.searchValue.value
    const newSearchProductInfo = searchProductInfo
    newSearchProductInfo.cod_barras = searchValue

    setSearchProductInfo(newSearchProductInfo)
    setSearchProduct(newSearchProductInfo)

    setPage("productUpdate")
  }

  return (
    <section className="productCreate header">
      <div className="img_block">
        <img src="/photo.png" alt="" className="img_photo" />
      </div>
      <form action="" method="post">

        <div className="form_rows">
          <div className="form_cod">
            <label htmlFor="" className="label_form_create">
              *Código de Barras
              <input
                type="number"
                name=""
                id=""
                className="input_form input_row"
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
                className="input_form input_row"
              />
            </label>
          </div>
        </div>

        <div className="ingredientes">
          <label htmlFor="" className="label_form_create">
            *Ingredientes
            <textarea
              maxlength="1000"
              minlength="500"
            />
          </label>
        </div>

        <div className="form_rows">
          <div className="create_qty">
            <label htmlFor="" className="label_form_create">
              *Quantidade
              <input
                type="text"
                name=""
                id=""
                className="input_form input_row"
              />
            </label>
          </div>
          <div className="create_value">
            <label htmlFor="" className="label_form_create">
              *Valor energético
              <input
                type="text"
                name=""
                id=""
                className="input_form input_row"
              />
            </label>
          </div>
        </div>

        <div className="form_rows">
          <div className="create_protein">
            <label htmlFor="" className="label_form_create">
              *Proteína
              <input
                type="text"
                name=""
                id=""
                className="input_form input_row"
              />
            </label>
          </div>
          <div className="create_carbo">
            <label htmlFor="" className="label_form_create">
              *Carboidrato
              <input
                type="text"
                name=""
                id=""
                className="input_form input_row"
              />
            </label>
          </div>
        </div>

        <div className="form_rows">
          <div className="create_total">
            <label htmlFor="" className="label_form_create">
              *Gorduras totais
              <input
                type="text"
                name=""
                id=""
                className="input_form input_row"
              />
            </label>
          </div>
          <div className="create_sodium">
            <label htmlFor="" className="label_form_create">
              *Sódio
              <input
                type="text"
                name=""
                id=""
                className="input_form input_row"
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
            className="button_default form_buttonSearch"
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
