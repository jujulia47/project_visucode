// import React from "react";
import '../../styles/css/pages/BemVindo/index.css'

function BemVindo(){
    
    return(
        <>
            <section className="tela_inicial">
                <img src="icons/botao-excluir.png" alt="" className='close_button'/>
                <div className='img_block'>
                    <img src="/cesta.png" alt="" className='img'/>
                    <div className='circle'></div>
                </div>

                <p className="text_title">Bem-Vindo ao Visucode </p>
                <p className="text">Identificar os produtos <br/>
                    ao seu redor ficou acessível</p>
            </section>
        </>
    )
}

export default BemVindo