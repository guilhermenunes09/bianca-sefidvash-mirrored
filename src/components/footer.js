import React from 'react';

import './footer.css';
import LogoInverted from '../imgs/logo_footer.png';
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
            <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center border-test">
                <div className="border-test">
                    <img src={LogoInverted} width={200} />
                </div>
                NAV
                <div className="border-test" >
                    <div className="border-test d-flex flex-column align-items-center m-2 menu">
                        <LinkSame exact to="/contato" spy={true}><div className="border-test">Quem Somos</div></LinkSame>
                        <LinkSame to="trajetoria"><div>Trajetória</div></LinkSame>
                        <LinkSame to="projeto"><div>Projetos</div></LinkSame>
                        <LinkSame to="forcas"><div>Nossas Forças</div></LinkSame>
                        <LinkSame to="depoimentos"><div>Depoimentos</div></LinkSame>
                        <Link to="servicos"><div>Nossos Serviços</div></Link>
                        <Link to="gerenciamento"><div>Gerenciamento</div></Link>
                        <Link to="contato"><div>Contato</div></Link>
                    </div>
                </div>

                <div className="d-flex flex-row social-networks align-items-center text-right">
                    Siga-nos nas redes sociais:<br />
                    <div className="">
                        <a target="_blank" title="follow me on facebook" className="sn"
                        href="https://www.facebook.com/ArquitetaBiancaSefidvash/">
                            <img alt="follow me on facebook" src={iconFacebook} border={0} /></a>
                    </div>
                    <div className="">
                        <a target="_blank" title="follow me on instagram" className="sn"
                        href="https://www.instagram.com/arquiteta_biancasefidvash">
                            <img alt="follow me on instagram" src={iconInstagram} border={0} /></a>
                    </div>
                    <div className="">
                        <a target="_blank" title="follow me on pinterest" className="sn"
                        href="https://www.pinterest.com/arquiteta_biancasefidvash"> 
                            <img alt="follow me on pinterest" 
                            src={iconPinterest} border={0} width={25} /></a>
                    </div>
                </div>
            </div>


            <div className="center h-center pt-3 copyright">
            © {currentYear()} - Biaca Savidvash Arquitetura + Interiores 
            </div>
        </div>
    );
}

export default Footer;