import React, { useContext } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/VisuResult/index.css";

function VisuRead() {
  const { setPage } = useContext(AppContext);

  return (
    <>
      <section className="visu_read header">
        <div className="img_block">
          <p className="product_title">Cookies de chocolate Bauduco 250g</p>
        </div>
        <div className="img_block">
          <img src="/cookies.png" alt="" className="img_read" />
        </div>
        <article className="ingredients_container">
          <h6 className="product_ingredients">Ingredientes</h6>
          <p className="ingredients_desc">
            FARINHA DE TRIGO ENRIQUECIDA COM FERRO E ÁCIDO FÓLICO, COBERTURA
            SABOR CHOCOLATE, AÇÚCAR, GORDURA VEGETAL, CACAU EM PÓ, LEITE
            INTEGRAL, SORO DE LEITE.
          </p>
        </article>
        <table className="nutritional_info"></table>
      </section>
    </>
  );
}

export default VisuRead;
