// import React, { useContext } from "react";
// import { AppContext } from "../../context";

import "../../styles/css/pages/VisuRead/index.css";

function VisuRead() {
  // const { setPage } = useContext(AppContext);
  return (
    <>
      <section className="admin_read header">
        <div className="img_block">
          <img src="/read.png" alt="" className="admin_read" />
        </div>
        <p className="text_adminRead">Escaneie produtos para ouvir as informações</p>
        <button className="button_default button_admin">Faça sua primeira leitura</button>
      </section>
    </>
  );
}

export default VisuRead;
