import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";

import logoRed from '../imgs/logo-red-light.svg';
import { Link as LinkSame, scroller, Events } from 'react-scroll';
import menuicon from '../imgs/iconmonstr-menu-5.svg';
import { useSpring, animated } from 'react-spring';

import './menu.css';

const Menu = props => {


    
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const [sideNav, setSideNav] = useState(false);

    const sideStyle = useSpring({
        duration: 200,
        width: sideNav ? 300 : 0,
    })

    function handleSideMenu () {
        setSideNav(sideNav => !sideNav)
    }


    return(
        <>

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

                <Link exact to="/">
                    <img src={logoRed} alt="Logo" style={{width: '50px'}} />
                </Link>
                <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <ul className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse navbar-nav`} id="navbarsExample09">
                        <li className="nav-item ml-auto"><Link to="/">Início</Link></li>
                        <li><Link to="/servicos">Serviços</Link></li>
                        <li><Link to="/gerenciamento">Gerenciamento</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                        <li className="side-nav-button" onClick={() => handleSideMenu()}><img src={menuicon} /></li>
                </ul>

                <animated.div style={sideStyle} className="side-nav">
                    <li className="nav-item ml-auto"><Link to="/">Início</Link></li>
                    <li><Link to="/servicos">Serviços</Link></li>
                    <li><Link to="/gerenciamento">Gerenciamento</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </animated.div>
            </nav>
         </>
    );
}

export default Menu;
