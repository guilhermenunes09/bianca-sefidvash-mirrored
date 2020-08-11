import React from 'react';

import './footer.css';
import LogoInverted from '../imgs/logo_inverted.svg';
import { Link as LinkSame, scroller, animateScroll, Events } from 'react-scroll';
import { Link, Redirect } from "react-router-dom";
import iconFacebook from '../pages/contato/img/iconmonstr-facebook-4.svg';
import iconInstagram from '../pages/contato/img/iconmonstr-instagram-14.svg';
import iconPinterest from '../imgs/pinterest_icon.svg';

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
            <div className="d-flex flew-row flex-wrap justify-content-between align-items-end">
                <div className="flex-fill" style={{width: '300px'}}>
                    <img src={LogoInverted} width={200} />
                </div>
                <div className="flex-fill text-center" >
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

                <div className="flex-fill social-networks text-right" style={{width: '300px'}}>
                    Siga-nos nas redes sociais:
                    <a target="_blank" title="follow me on facebook" className="sn"
                    href="https://www.facebook.com/ArquitetaBiancaSefidvash/">
                        <img alt="follow me on facebook" src={iconFacebook} border={0} /></a>
                    <a target="_blank" title="follow me on instagram" className="sn"
                    href="https://www.instagram.com/arquiteta_biancasefidvash">
                        <img alt="follow me on instagram" src={iconInstagram} border={0} /></a>
                    <a target="_blank" title="follow me on pinterest" className="sn"
                    href="https://www.pinterest.com/arquiteta_biancasefidvash"> 
                        <img alt="follow me on pinterest" style={{marginLeft: '-10px'}} className="sn"
                        src={iconPinterest} border={0} width={45} /></a>
                </div>
            </div>


            <div className="center h-center pt-3">
            © {currentYear()} - Biaca Savidvash Arquitetura + Interiores 
            </div>
        </div>
    );
}

export default Footer;