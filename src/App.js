import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
import Fim from './fim/fim.js';

import Container from 'react-bootstrap/Container';
import './index.css';


const App = () => {

  return (
    <div>
      <header className="App-header"></header>
      <Container fluid className="fill-height" style={{backgroundColor:'#ccc'}}>
        <Router>
          <div>
            <Menu />
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
              <Route path="/fim"><Fim /></Route>
            </Switch>
          </div>
        </Router>
      </Container>
    </div>
  );
}

export default App;
