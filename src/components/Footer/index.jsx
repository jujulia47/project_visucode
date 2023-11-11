import React, { useContext } from "react";
import { AppContext } from "../../context";
import "../../styles/css/components/Footer/index.css";

function Footer() {
  const { setPage, isAdmin, page } = useContext(AppContext);
  return (
    <>
      <footer>
        <ul className="footer_user">
          <li className={`icon_repeat`} onClick={() => window.alert("Repetindo")}>
            <img src="./icons/repeat.png" alt="" />
            {isAdmin ? "" : <p>Repetir</p>}
          </li>

          <li className={`icon_read ${page === "visuRead" ? "active" : ""}`} onClick={() => setPage("visuRead")}>
            <img src="./icons/read.png" alt="" />
            {isAdmin ? "" : <p>Leitura</p>}
          </li>
          <li className={`icon_searc ${page === "visuResult" ? "active" : ""}`} onClick={() => setPage("visuResult")}>
            <img src="./icons/search.png" alt="" />
            {isAdmin ? "" : <p>Produtos</p>}
          </li>
          {isAdmin && ( 
            <>
              <li className={`icon_cart ${page === "productCreate" ? "active" : ""}`} onClick={() => setPage("productCreate")}>
                <img src="./icons/cart.png" alt="" />
              </li>
              <li className={`icon_userPlus ${page === "userCreate" ? "active" : ""}`} onClick={() => setPage("userCreate")}>
                <img src="./icons/user_plus.png" alt="" />
              </li>
            </>
          )}
        </ul>
      </footer>
    </>
  );
}

export default Footer;
