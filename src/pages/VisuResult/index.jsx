import React, { useContext } from "react";
import { AppContext } from "../../context";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "../../styles/css/pages/VisuRead/index.css";

function VisuRead() {
  const { setPage } = useContext(AppContext);

  return (
    <>
      <Header />
      <section className="visu_read">
        <div className="img_block">
          <p className="product_title">Cookies de chocolate 
            Bauduco 250g</p>
          <img src="/cookie.png" alt="" className="img_read" />
        </div>
        <article className="ingredients_container">
            <p className="product_ingredients">
                Ingredientes</p>
            <p className="ingredients_desc">
            fARINHA DE TRIGO ENRIQUECIDA COM FERRO E ÁCIDO FÓLICO, COBERTURA SABOR CHOCOLATE, AÇÚCAR, GORDURA VEGETAL, CACAU EM PÓ, LEITE INTEGRAL, SORO DE LEITE.
            </p>
        </article>
        <table className="nutritional_info">

        </table>
      </section>
      <Footer />
    </>
  );
}

export default VisuRead;
