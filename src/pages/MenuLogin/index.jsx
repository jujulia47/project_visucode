import { useContext } from "react";
import { AppContext } from "../../context";
import Icon from "./components";
import "../../styles/css/pages/MenuLogin/index.css";

function MenuLogin() {
  const { setPage } = useContext(AppContext);

  return (
    <>
      <section className="menu_login">
        <div className="img_block">
          <img src="/intelligence.png" alt="" className="img_login" />
        </div>
        <p className="text_title_login">Faça novas descobertas</p>
        <p className="text_login">
          Econtre os produtos que deseja <br />
          com apenas um clique
        </p>
        <div className="login_options">
          <p className="paragraph_options">Escolha uma opção para continuar</p>
          <ul className="options_list">
            <li>
              <button className="form_button" onClick={() => setPage("loginCreate")}>Cadastre-se</button>
            </li>
            <li className="google_button">
              <Icon />
            </li>
            <li>
              <button className="menubutton_default menuLogin_button" onClick={() => setPage("login")}>Já tem uma conta?</button>
            </li>
          </ul>
        </div>
        <div className="buttons_slick slick_menu">
          <button onClick={() => setPage("telaInicial")} className="prev_button">
            Voltar
          </button>
          <ul className="slick">
            <li>
              <button
                onClick={() => setPage("bemVindo")}
                className="slick_next"
              ></button>
            </li>
            <li>
              <button onClick={() => setPage("telaInicial")} className="slick_next"></button>
            </li>
            <li>
              <button
                className="slick_active"
              ></button>
            </li>
          </ul>
          <button onClick={() => setPage("menuLogin")} className="next_button_login">
            Próximo
          </button>
        </div>
      </section>
    </>
  );
}

export default MenuLogin;
