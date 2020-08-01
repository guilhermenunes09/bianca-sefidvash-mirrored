import React, { useState } from 'react';
import {
    Link
  } from "react-router-dom";

import logoRed from '../imgs/logo_red.png';

import './menu.css';

const Menu = props => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


    return(
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand text-info font-weight-bolder text-center">
                    <img src={logoRed} alt="Logo" style={{width: '50px'}} />
                </div>
                <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                

                <ul className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse navbar-nav mr-auto`} id="navbarsExample09">
                    <li ><Link to="/">Home</Link></li>
                    <li><Link to="/quemsomos">Quem Somos</Link></li>
                    <li><Link to="/trajetoria">Trajetória</Link></li>
                    <li><Link to="/projeto">Projeto</Link></li>
                    <li><Link to="/forcas">Forças</Link></li>
                    <li><Link to="/servicos">Serviços</Link></li>

                    <li><Link to="/gerenciamento">Gerenciamento</Link></li>
                    <li><Link to="/depoimentos">Depoimentos</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    
                </ul>
            </nav>
         </>
    );
}

export default Menu;
