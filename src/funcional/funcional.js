import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import FuncionalImg1 from './img/funcional-1.png';
import FuncionalImg2 from './img/funcional-2.png';
import FuncionalImg3 from './img/funcional-3.png';
import FuncionalImg4 from './img/funcional-4.png';
import FuncionalImg5 from './img/funcional-5.png';

import MainText from '../components/mainText.js';

const content = {
    title: `Arquitetura Funcional e de Performance`,
    text: [`ARQUITETURA CORPORATIVA`, `ÁREAS DE DESCOMPRESSÃO`,
    `ESCRITORIOS PARTICULARES`,`CLÍNICAS E ESPAÇOS DE SAÚDE`,
    `PONTOS COMERCIAIS E LOJAS`, `RESTAURANTES, CAFÉS E BARES`, `ESTUDOS DE ACESSIBILIDADE`]
}

const Funcional = () => {
    return(
        <React.Fragment>

            <div className="d-flex flex-row justify-content-center">
                <div className="my-flex-item">
                    <MainText title={content.title} />
                    <Card>
                        <Card.Body>ARQUITETURA CORPORATIVA</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>ÁREAS DE DESCOMPRESSÃO</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>ESCRITORIOS PARTICULARES</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>CLÍNICAS E ESPAÇOS DE SAÚDE</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>PONTOS COMERCIAIS E LOJAS</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>RESTAURANTES, CAFÉS E BARES</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>ESTUDOS DE ACESSIBILIDADE</Card.Body>
                    </Card>
                </div>
                <div className="my-flex-item">
                    <img className="img-fluid" src={FuncionalImg1} height={300}  />
                    <img className="img-fluid" src={FuncionalImg2} height={300}  />
                    <img className="img-fluid" src={FuncionalImg3} height={300}  />
                </div>
                <div className="my-flex-item">
                    <img className="img-fluid" src={FuncionalImg4} height={300}  />
                    <img className="img-fluid" src={FuncionalImg5} height={300}  />
                </div>

            </div>

        </React.Fragment>
    )
}

export default Funcional;