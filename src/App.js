import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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


import Container from 'react-bootstrap/Container';
import './index.css';


const App = () => {

  return (
    <div>
      <header className="App-header"></header>
      <Container fluid className="fill-height" style={{backgroundColor:'#ccc'}}>
        <Router>
          <div>
            <Switch>
              <Route path="/">
                <QuemSomos />
              </Route>
            </Switch>
          </div>
        </Router>
      </Container>
    </div>
  );
}

export default App;
