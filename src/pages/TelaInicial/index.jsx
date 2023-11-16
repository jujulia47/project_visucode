import { useContext } from "react";
import { AppContext } from "../../context";
import "../../styles/css/pages/TelaInicial/index.css";

function TelaInicial() {
  const { setPage } = useContext(AppContext);

  return (
    <>
      <section className="tela_inicial">
        <div className="img_block">
          <img src="/milk.png" alt="" className="telaInicial_img" />
        </div>
        <p className="text_title_TelaInicial">Conheça os produtos </p>
        <p className="text_TelaInicial">
          Escaneie o código de barras dos produtos <br />e ouça suas principais
          informações
        </p>

        <div className="buttons_slick slick_telaInicial">
          <button onClick={() => setPage("bemVindo")} className="prev_button">
            Voltar
          </button>
          <ul className="slick">
            <li>
              <button onClick={() => setPage("bemVindo")} className="slick_next"></button>
            </li>
            <li>
              <button
                className="slick_active"
              ></button>
            </li>
            <li>
              <button
                onClick={() => setPage("menuLogin")}
                className="slick_next"
              ></button>
            </li>
          </ul>
          <button onClick={() => setPage("menuLogin")} className="next_button">
            Próximo
          </button>
        </div>
      </section>
    </>
  );
}

export default TelaInicial;
