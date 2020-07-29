import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Menu = props => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isDropDown1, setIsDropDown1] = useState(false);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const handleDropDown1 = () => {
        setIsDropDown1(!isDropDown1);
    }

    return(
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
                <a class="navbar-brand text-info font-weight-bolder" href="/">
                    
                    <span className="">Discounter</span>
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

                    <li class="nav-item dropdown">
                        <a onClick={handleDropDown1} class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Serviços
                        </a>
                        <div className={`${isDropDown1 ? 'show' : '' } dropdown-menu`} aria-labelledby="navbarDropdown">
                            <li><Link to="/residencial">Residencial</Link></li>
                            <li><Link to="/interiores">Interiores</Link></li>
                            <li><Link to="/planejados">Planejados</Link></li>
                            <li><Link to="/funcional">Funcional</Link></li>
                        </div>
                    </li>
                    <li><Link to="/gerenciamento">Gerenciamento</Link></li>
                    <li><Link to="/depoimentos">Depoimentos</Link></li>
                    <li><Link to="/fim">Fim</Link></li>
                    
                </ul>
            </nav>
         </div>
    );
}

export default Menu;
