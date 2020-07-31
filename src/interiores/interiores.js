import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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
            <div className="d-flex flex-row-reverse justify-content-center">
                <div className="my-flex-item">
                    <MainText title={content.title} />

                    <Card>
                        <Card.Body>REFORMAS RESIDÊNCIAS – SALAS, QUARTOS, COZINHAS, BANHEIROS, etc;</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>PRODUÇÃO DE AMBIENTES – DECORAÇÃO, ASSESSORIA DE CORES E REVESTIMENTOS;</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body> REFORMAS DE ÁREAS COMUNS - ÁREAS GOURMET, ESPAÇOS KIDS, ESPAÇOS PETS</Card.Body>
                    </Card>
                   
                </div>
                <div className="my-flex-item">
                    <img className="img-fluid" src={InterioresImg1} height={300}  />
                </div>
            </div>

            <div className="d-flex flex-row-reverse justify-content-center mb-4">
                <div className="my-flex-item">
                    <img className="img-fluid" src={InterioresImg2} height={300}  />
                </div>
                <div className="my-flex-item">
                    <img className="img-fluid" src={InterioresImg3} height={300}  />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Interiores;