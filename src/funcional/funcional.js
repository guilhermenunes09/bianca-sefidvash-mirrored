import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Row style={{height: '50vh'}}>
                <Col xs={4}>
                    <MainText title={content.title} text={content.text} />
                    <img className="m-2" height={300} src={FuncionalImg1} />
                </Col>
                <Col xs={4}>
                    <img className="m-2" height={300} src={FuncionalImg2} /><br />
                    <img className="m-2" height={300} src={FuncionalImg3} />
                </Col>
                <Col xs={4}>
                    <img className="m-2" height={300} src={FuncionalImg4} /><br />
                    <img className="m-2" height={300} src={FuncionalImg5} />
                </Col>
            </Row>
            

        </React.Fragment>
    )
}

export default Funcional;