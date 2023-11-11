import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/ProductUpdate/index.css";

function ProductUpdate() {
  const { 
    setPage,
    searchProductInfo,
    setSearchProductInfo
  } = useContext(AppContext);

  
  const handleUpdate = (e) => {
    e.preventDefault()

    const searchValueName = e.target.name.value
    const searchValueIngredient = e.target.ingredient.value
    const searchValueQuantity = e.target.quantity.value
    const searchValueEnergetic = e.target.energetic.value
    const searchValueProtein = e.target.protein.value
    const searchValueCarb = e.target.carb.value
    const searchValueFat = e.target.fat.value
    const searchValueSodium = e.target.sodium.value
  
    const newSearchProductInfo = searchProductInfo
    newSearchProductInfo.name = searchValueName
    newSearchProductInfo.ingredient = searchValueIngredient
    newSearchProductInfo.quantity = searchValueQuantity
    newSearchProductInfo.energetic = searchValueEnergetic
    newSearchProductInfo.protein = searchValueProtein
    newSearchProductInfo.carb = searchValueCarb
    newSearchProductInfo.fat = searchValueFat
    newSearchProductInfo.sodium = searchValueSodium

    setSearchProductInfo(newSearchProductInfo)
    setPage("ProductUpdate")
  }


  return (
    <>
      <section className="login header">
        <div className="img_block">
          <img src="/visucode_logo.png" alt="" className="img_logo" />
        </div>
        <form onSubmit={e => handleUpdate(e)} action="" method="post">
        <div className="form_rows">
          <div className="form_cod">
            <label htmlFor="" className="label_form_create">
              *Código de Barras
              <input
                type="number"
                name=""
                id="cod_barras"
                value={searchProductInfo && searchProductInfo.cod_barras}
                // placeholder="Código de Barras"
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
                id="name"
                value={searchProductInfo && searchProductInfo.name}
                // placeholder="Digite seu nome"
                className="input_form input_row"
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
              value={searchProductInfo && searchProductInfo.ingredient}
              id="ingredient"
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
                id="quantity"
                value={searchProductInfo && searchProductInfo.quantity}
                // placeholder="Quantidade"
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
                id="energetic"
                value={searchProductInfo && searchProductInfo.energetic}
                // placeholder="Valor energético"
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
                id="protein"
                value={searchProductInfo && searchProductInfo.protein}
                // placeholder="Proteína"
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
                id="carb"
                value={searchProductInfo && searchProductInfo.carb}
                // placeholder="Carboidrato"
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
                id="fat"
                value={searchProductInfo && searchProductInfo.fat}
                // placeholder="Gorduras totais"
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
                id="sodium"
                value={searchProductInfo && searchProductInfo.sodium}
                // placeholder="Sódio"
                className="input_form input_row"
              />
            </label>
          </div>
        </div>
          </form>
        <div className="button_container">
          <button
            className="button_default button_default login_button"
            onClick={() => window.alert("Salvado")}
          >
            Salvar
          </button>

          <button
            className="button_default delete_button"
            onClick={() => setPage("productDelete")}
          >
            Excluir
          </button>
        </div>
      </section>
    </>
  );
}

export default ProductUpdate;
