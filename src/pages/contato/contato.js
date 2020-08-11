import React, {useEffect} from 'react';

import './contato.css';

import contatoImg from './img/contato01.png';

import iconEmail from './img/iconmonstr-email-10.svg';
import iconFacebook from './img/iconmonstr-facebook-4.svg';
import iconInstagram from './img/iconmonstr-instagram-14.svg';
import iconPhone from "./img/iconmonstr-phone-8.svg";

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Title from '../../components/title.js';

import Logo from "../../imgs/logo.png";

import Img from '../../components/img.js';


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
        <div id="page">
            <div className="text-center">
                <Title title={"Contato"} />
            </div>
            <div className="d-flex flex-row-reverse justify-content-center">
                <div className="my-flex-item">
                    <div className="d-flex flex-column justify-content-between column-height pl-4">
                        <div className="my-flex-item-column text-left">
                            <Img nofluid image={Logo} alt={"Logo Bianca Sefidvash Arquiteta"} width={200} />
                        </div>
                        
                        <div className="d-flex flex-row my-flex-item-column">
                            <div className="my-flex-item-sm center">
                                <Img nofluid image={iconInstagram} alt={"Ícone Instagram @arquiteta_biancasefidvash"} width={20} />
                            </div>
                            <div className="my-flex-item center pl-2">
                                <a href="https://www.instagram.com/arquiteta_biancasefidvash/" target="_blank">@arquiteta_biancasefidvash</a>
                            </div>
                        </div>

                        <div className="d-flex flex-row my-flex-item-column">
                            <div className="my-flex-item-sm center">
                                <Img nofluid image={iconFacebook} alt={"Ícone Facebook /ArquitetaBiancaSefidvash"} width={20} />
                            </div>
                            <div className="my-flex-item center pl-2">
                                <a href="https://www.facebook.com/ArquitetaBiancaSefidvash/" target="_blank">/ArquitetaBiancaSefidvash</a>
                            </div>
                        </div>

                        <div className="d-flex flex-row my-flex-item-column">
                            <div className="my-flex-item-sm center">
                                <Img nofluid image={iconEmail} alt={"Ícone Email arq.bianca@sefidvash.net"} width={20} />
                            </div>
                            <div className="my-flex-item center pl-2">
                                <a href="mailto: arq.bianca@sefidvash.net">arq.bianca@sefidvash.net</a>
                            </div>
                        </div>

                        <div className="d-flex flex-row my-flex-item-column">
                            <div className="my-flex-item-sm center">
                            <Img nofluid image={iconPhone} alt={"Ícone telefone arquiteta 19 99304-3052"} width={20} />
                                
                            </div>
                            <div className="my-flex-item center pl-2">
                            <a href="tel:+55-19-99304-3052">(19) 99304-3052</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-flex-item">
                    <Img image={contatoImg} alt={"Modelo Casa 3D Interior"} />
                </div>
            </div>
        </div>
    )
}

export default Contato;