import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InterioresImg1 from './img/interiores-1.jpg';
import InterioresImg2 from './img/interiores-2.png';
import InterioresImg3 from './img/interiores-3.jpg';

import MainText from '../components/mainText.js';

const content = {
    title: `Design de Interiores`,
    text: [`REFORMAS RESIDÊNCIAS – SALAS, QUARTOS, COZINHAS, BANHEIROS, etc;`,`PRODUÇÃO DE AMBIENTES – DECORAÇÃO, ASSESSORIA DE CORES E REVESTIMENTOS;`,`REFORMAS DE ÁREAS COMUNS - ÁREAS GOURMET, ESPAÇOS KIDS, ESPAÇOS PETS.`]
}

const Interiores = () => {
    return(
        <React.Fragment>
        <Row style={{height: '50vh'}}>
                <Col>
                    <MainText title={content.title} text={content.text} />
                </Col>
                <Col>
                    <img src={InterioresImg1} height={300}  />
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={InterioresImg2} height={300} />
                </Col>
                <Col>
                    <img src={InterioresImg3} height={300} />
                </Col>
            </Row>
     </React.Fragment>
    )
}

export default Interiores;