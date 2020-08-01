import React, {useEffect} from 'react';

import './contato.css';

import contatoImg from './img/contato01.png';

import iconEmail from './img/iconmonstr-email-10.svg';
import iconFacebook from './img/iconmonstr-facebook-4.svg';
import iconInstagram from './img/iconmonstr-instagram-14.svg';
import iconPhone from "./img/iconmonstr-phone-8.svg";

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Logo from "../imgs/logo.png";


const Contato = () => {

    let targetElement = null;

    useEffect(()=> {
        targetElement = document.querySelector('#body');
        disableBodyScroll(targetElement);
        return () => {
            enableBodyScroll(targetElement);
        }
    });

    return(
        <div id="page" className="d-flex flex-row-reverse justify-content-center">
            <div className="my-flex-item">
                <div className="d-flex flex-column justify-content-between column-height pl-4">
                    
                    <div className="my-flex-item-column">
                        <img alt="Logo Bianca Sefidvash Arquiteta" className="img-fluid" src={Logo} width={200} />
                    </div>
                    
                    <div className="d-flex flex-row my-flex-item-column">
                        <div className="my-flex-item-sm center">
                            <img alt="Ícone Instagram @arquiteta_biancasefidvash" src={iconInstagram} width={20} />
                        </div>
                        <div className="my-flex-item center pl-2">
                            @arquiteta_biancasefidvash
                        </div>
                    </div>

                    <div className="d-flex flex-row my-flex-item-column">
                        <div className="my-flex-item-sm center">
                            <img alt="Ícone Facebook /ArquitetaBiancaSefidvash" src={iconFacebook} width={20} />
                        </div>
                        <div className="my-flex-item center pl-2">
                            /ArquitetaBiancaSefidvash
                        </div>
                    </div>

                    <div className="d-flex flex-row my-flex-item-column">
                        <div className="my-flex-item-sm center">
                            <img alt="Ícone Email arq.bianca@sefidvash.net" src={iconEmail} width={20} />
                        </div>
                        <div className="my-flex-item center pl-2">
                            arq.bianca@sefidvash.net
                        </div>
                    </div>

                    <div className="d-flex flex-row my-flex-item-column">
                        <div className="my-flex-item-sm center">
                            <img alt="Ícone telefone arquiteta 19 99304-3052" src={iconPhone} width={20} />
                        </div>
                        <div className="my-flex-item center pl-2">
                            19 99304-3052
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-flex-item">
                <img alt="Modelo Casa 3D Interior" className="img-fluid" src={contatoImg} />
            </div>
        </div>
    )
}

export default Contato;