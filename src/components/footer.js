import React from 'react';

import './footer.css';
import LogoInverted from '../imgs/logo_inverted.svg';
import { Link as LinkSame, scroller, animateScroll, Events } from 'react-scroll';
import { Link, Redirect } from "react-router-dom";

function Footer () {
    const currentYear = () => {
        return new Date().getFullYear();
    }
    
    new Date().getFullYear();

    let scroll = animateScroll;

    function scrollToTop (link) {
        console.log("here");
        scroll.scrollToTop();

        return <Redirect to={link}/>
    }
    return(
        <div className="footer">
            <div className="d-flex flew-row justify-items-between">
                <div className="flex-fill" style={{width: '300px'}}>
                    <img src={LogoInverted} width={200} />
                </div>
                <div className="flex-fill" style={{width: '300px'}}>
                    <ul>
                        <LinkSame exact to="/contato" spy={true}><li>Quem Somos</li></LinkSame>
                        <LinkSame to="trajetoria"><li>Trajetória</li></LinkSame>
                        <LinkSame to="projeto"><li>Projetos</li></LinkSame>
                        <LinkSame to="forcas"><li>Nossas Forças</li></LinkSame>
                        <LinkSame to="depoimentos"><li>Depoimentos</li></LinkSame>
                        <Link to="servicos"><li>Nossos Serviços</li></Link>
                        <Link to="gerenciamento"><li>Gerenciamento</li></Link>
                        <Link to="contato"><li>Contato</li></Link>
                    </ul>
                </div>
                <div className="flex-fill" style={{width: '300px'}}>
                    Teste 3
                </div>
            </div>


            <div className="center h-center pt-3">
            © {currentYear()} - Biaca Savidvash Arquitetura + Interiores 
            </div>
        </div>
    );
}

export default Footer;