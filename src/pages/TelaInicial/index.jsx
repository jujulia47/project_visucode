// import React from "react";
import '../../styles/css/pages/TelaInicial/index.css'

function TelaInicial(){
    return(
        <>
            <section className="tela_inicial">
                <img src="icons/botao-excluir.png" alt="" className='close_button'/>
                <div className='img_block'>
                    <img src="/milk.png" alt="" className='img'/>
                </div>
                <p className="text_title">Conheça os produtos </p>
                <p className="text">Escaneie o código de barras dos produtos <br/>
                    e ouça suas principais informações</p>
            </section>
        </>
    )
}

export default TelaInicial