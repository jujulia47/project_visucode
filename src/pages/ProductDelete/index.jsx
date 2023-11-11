import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/ProductDelete/index.css";

function ProductDelete() {
  const { setPage, searchProduct } = useContext(AppContext);
  const [modal, setModal] = useState(true);

  return (
    <>
      <section className="delete_page header">
        <div className="img_block">
          <img src="/visucode_logo.png" alt="" className="img_logo" />
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
                  id=""
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
                  id=""
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
                  id=""
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
                  id=""
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
                  id=""
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
                  id=""
                  // placeholder="Sódio"
                  className="input_form input_row"
                />
              </label>
            </div>
          </div>
        </form>
      </section>

      <section className="modal">
        <div className="alert">
          <img src="/icons/warning.png" alt="warning" />
          <p>Deseja excluir este produto?</p>
        </div>
        <div className="button_container">
        <button
            className="button_default delete_button"
            onClick={() => window.alert("excluído")}
          >
            Sim
          </button>
          <button
            className="button_default button_default login_button"
            onClick={() => setPage("productDelete")}
          >
            Não
          </button>
        </div>
      </section>
    </>
  );
}

export default ProductDelete;
