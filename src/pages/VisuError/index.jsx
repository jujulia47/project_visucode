import React, { useContext } from "react";
import { AppContext } from "../../context";

import "../../styles/css/pages/VisuRead/index.css";

function VisuRead() {
  const { setPage } = useContext(AppContext);

  return (
    <>
      <section className="visu_error header">
        <div className="img_block">
          <img src="/error.png" alt="" className="img_error" />
        </div>
        <p className="text_visuError">Nenhum produto encontrado! Escaneie um novo código de barras</p>
        <button className="button_error">Faça uma nova leitura</button>
      </section>
    </>
  );
}

export default VisuRead;
