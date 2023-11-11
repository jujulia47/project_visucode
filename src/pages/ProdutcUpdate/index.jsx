import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/ProductUpdate/index.css";

function ProductUpdate() {
  const { 
    setPage,
    searchProduct
  } = useContext(AppContext);


  return (
    <>
      <section className="login">
        <div className="img_block">
          <img src="/visucode_logo.png" alt="" className="img_logo" />
        </div>
        <form action="" method="post">
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
            <div className="create_email">
              <label htmlFor="" className="label_form_create">
                *Ingredientes
                <input
                  type="text"
                  name=""
                  id=""
                  // placeholder="Ingredientes"
                  className="input_form"
                />
              </label>
            </div>
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
            onClick={() => window.alert("excluído")}
          >
            Excluir
          </button>
        </div>
      </section>
    </>
  );
}

export default ProductUpdate;
