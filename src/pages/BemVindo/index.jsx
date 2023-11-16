import React, { useContext } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/BemVindo/index.css";

function BemVindo() {
  const { setPage } = useContext(AppContext);

  return (
    <>
      <section className="bem_vindo">
        <div className="img_block">
          <img
            src="/visuCode.png"
            alt="imagem de uma cesta com alimentos"
            className="bemVindo_img"
          />
        </div>
        <div className="texts_block">
          <p className="text_BemVindo">Bem-Vindo ao Visucode </p>
          <p className="bemVindo_paragraph">
            Identificar os produtos <br />
            ao seu redor ficou acessível
          </p>
        </div>
        <div className="buttons_slick slick_bemVindo">
          <button className="prev_button_BemVindo">Voltar</button>
          <ul className="slick">
            <li>
              <button className="slick_active"></button>
            </li>
            <li>
              <button
                onClick={() => setPage("telaInicial")}
                className="slick_next"
              ></button>
            </li>
            <li>
              <button
                onClick={() => setPage("menuLogin")}
                className="slick_next"
              ></button>
            </li>
          </ul>
          <button onClick={() => setPage("telaInicial")} className="next_button">Próximo</button>
        </div>
      </section>
    </>
  );
}

export default BemVindo;
