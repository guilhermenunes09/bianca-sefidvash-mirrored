import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from './components/menu.js';

import Home from './home/home.js';
import QuemSomos from './quemsomos/quemsomos.js';
import Trajetoria from './trajetoria/trajetoria.js';
import Projeto from './projeto/projeto.js';
import Forcas from './forcas/forcas.js';
import Servicos from './servicos/servicos.js';
import Residencial from './residencial/residencial.js';
import Interiores from './interiores/interiores.js';
import Planejados from './planejados/planejados.js';
import Funcional from './funcional/funcional.js';
import Gerenciamento from './gerenciamento/gerenciamento.js';
import Depoimentos from './depoimentos/depoimentos.js';
import Contato from './contato/contato.js';
import Footer from './components/footer.js';
import './components/background/background.css';

import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Parallax from './components/parallax.js';

const App = () => {

  //<Parallax />
  //<Parallax numberLines={2} x1={-1363} x2={270} y1={1619} translateX={277} rotate={18}/>
  useEffect(()=>{
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });
  });

  return (
    <>
      <header className="App-header"></header>
      <div className="vertical-div-left" ></div>
      <div className="vertical-div-right" ></div>
      <div id="firstContainer" className="container-fluid fill-height">
        <Router>
            <Menu />
              <div className="main-container">
                <Switch>
                  <Route exact path="/"><Home /></Route>
                  <Route path="/quemsomos"><QuemSomos /></Route>
                  <Route path="/trajetoria"><Trajetoria /></Route>
                  <Route path="/projeto"><Projeto /></Route>
                  <Route path="/forcas"><Forcas /></Route>
                  <Route path="/servicos"><Servicos /></Route>
                  <Route path="/residencial"><Residencial /></Route>
                  <Route path="/interiores"><Interiores /></Route>
                  <Route path="/planejados"><Planejados /></Route>
                  <Route path="/funcional"><Funcional /></Route>
                  <Route path="/gerenciamento"><Gerenciamento /></Route>
                  <Route path="/depoimentos"><Depoimentos /></Route>
                  <Route path="/contato"><Contato /></Route>
                </Switch>
              </div>
            <Footer />
        </Router>
        
      </div>
    </>
  );
}

export default App;
