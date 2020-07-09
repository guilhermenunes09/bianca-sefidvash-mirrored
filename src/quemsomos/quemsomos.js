import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import QuemSomosImage from './img/quemsomos_1.jpg';

const style = {
    quemSomos: {
        backgroundColor: '#cc00cc',
        padding: '6em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        backgroundColor: '#cc000c',
        backgroundImage: `url(${QuemSomosImage})`,
        backgroundSize: 'cover',
    }
}


const QuemSomos = () => {

    return (
        <React.Fragment>
            <Row style={{backgroundColor: '#0fffff', height: '100vh'}}>
                <Col xs={4} style={style.image}></Col>
                <Col xs={0} md={6} style={style.quemSomos} className="table">
                    <div className="align-middle">
                        <h1>Quem Somos?</h1>
                        <p>O escritório Bianca Sefidvash Arquitetura + Interiores,
                            comandado pela própria arquiteta, tem a região de Campinas/SP 
                            sua principal área de atuação.
                        </p>
                        <p>
                            Formada pela PUC, em Porto Alegre/RS, a arquiteta Bianca Sefidvash
                            desenvolve projetos de Arquitetura Residencial e de Design de Interiores
                            para clientes particulares e Corporativa, bem como atua na Gestão de Projetos
                            e Administração de obra. 
                        </p>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );

}

export default QuemSomos;