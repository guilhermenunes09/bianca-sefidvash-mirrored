import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, withRouter } from "react-router-dom";

import logoRed from '../imgs/logo-red-light.svg';
import { Link as LinkSame, scroller, Events } from 'react-scroll';
import menuicon from '../imgs/iconmonstr-menu-5.svg';
import iconx from '../imgs/icon_x.svg';
import { useSpring, animated } from 'react-spring';

import { MenuContext, setMenuContext } from '../contexts/menuContext.js';


import './menu.css';

const Menu = () => {

    const menu = useContext(MenuContext);
    const setMenu = useContext(setMenuContext);

    const sideNavRef = useRef();
    
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const [sideNav, setSideNav] = useState(false);

    const sideStyle = useSpring({
        duration: 200,
        width: menu ? 300 : 0,
    })

    function handleSideMenu () {
        setMenu(true);
    }

    useEffect(() => {

        
        //console.log(changeMenu);
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
                console.log("You clicked outside of me!");
                //setSideNav(false);
                //changeMenu();
     
                setMenu(false);
            } else {
                console.log("Nothing");
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", (e) => handleClickOutside(e));
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sideNavRef]);


    return(
        <>
            <div className={menu ? 'invisible-bt' : 'side-nav-button button-menu' } onClick={() => handleSideMenu()}><img width={30} src={menuicon} /></div>
            <div className={menu ? 'button-menu side-nav-button' : 'invisible-bt' }><img width={20} src={iconx} /> </div> 
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <Link exact to="/">
                    <img src={logoRed} alt="Logo" style={{width: '50px'}} />
                </Link>
                <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse navbar-nav invisible`} id="navbarsExample09">
                        <li className="nav-item ml-auto"><Link to="/">Início</Link></li>
                        <li><Link to="/servicos">Serviços</Link></li>
                        <li><Link to="/gerenciamento">Gerenciamento</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                </ul>

                <animated.div style={sideStyle} className="side-nav">
                    <div ref={sideNavRef} className="p-3 m-3">
                        <li className="nav-item ml-auto"><Link to="/">Início</Link></li>
                        <li><Link to="/servicos">Serviços</Link></li>
                        <li><Link to="/gerenciamento">Gerenciamento</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </div>
                </animated.div>
            </nav>
         </>
    );
}

export default Menu;
