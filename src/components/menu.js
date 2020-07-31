import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import logo from '../imgs/logo.png';
import logoRed from '../imgs/logo_red.png';

import './menu.css';

import Dropdown from 'react-bootstrap/dropdown';

const Menu = props => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isDropDown1, setIsDropDown1] = useState(false);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const handleDropDown1 = () => {
        setIsDropDown1(!isDropDown1);
    }

    return(
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand text-info font-weight-bolder text-center" href="/">
                    <img src={logoRed} alt="Logo" style={{width: '50px'}} />
                </a>
                <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span class="navbar-toggler-icon"></span>
                </button>

                

                <ul className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse navbar-nav mr-auto`} id="navbarsExample09">
                    <li ><Link to="/">Home</Link></li>
                    <li><Link to="/quemsomos">Quem Somos</Link></li>
                    <li><Link to="/trajetoria">Trajetória</Link></li>
                    <li><Link to="/projeto">Projeto</Link></li>
                    <li><Link to="/forcas">Forças</Link></li>
                    <li><Link to="/servicos">Serviços</Link></li>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            Serviços
                        </Dropdown.Toggle>

                        <Dropdown.Menu fadeIn= {true}>
                            <Dropdown.Item><Link to="/residencial">Residencial</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/interiores">Interiores</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/funcional">Funcional</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <li class="nav-item dropdown">
                        <div className={`${isDropDown1 ? 'show' : '' } dropdown-menu`} aria-labelledby="navbarDropdown">
                            <li></li>
                            <li></li>
                            <li><Link to="/planejados">Planejados</Link></li>
                            <li><Link to="/funcional">Funcional</Link></li>
                        </div>
                    </li>
                    <li><Link to="/gerenciamento">Gerenciamento</Link></li>
                    <li><Link to="/depoimentos">Depoimentos</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    
                </ul>
            </nav>
         </div>
    );
}

export default Menu;
