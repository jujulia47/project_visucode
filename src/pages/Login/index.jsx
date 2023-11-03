// import React from "react";
import Icon from './components'
import '../../styles/css/pages/Login/index.css'

function Login(){
    return(
        <>
            <section className="tela_inicial">
                <img src="icons/botao-excluir.png" alt="" className='close_button'/>
                <div className='img_block'>
                    <img src="/intelligence.png" alt="" className='img'/>
                </div>
                <p className="text_title">Faça novas descobertas</p>
                <p className="text">Econtre os produtos que deseja <br/>
                    com apenas um clique</p>
                <div className='login_option'>
                    <p className='choose'>Escolha uma opção para continuar</p>
                    <ul className='itens'>
                        <li className='button'><button>Continuar como convidado</button></li>
                        <li className='icon'><Icon/></li>
                        
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Login