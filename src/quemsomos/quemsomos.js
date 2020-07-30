import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import QuemSomosImage from './img/quemsomos_1.jpg';
import MainText from '../components/mainText.js';

const style = {
    image: {
        backgroundColor: '#cc000c',
        backgroundImage: `url(${QuemSomosImage})`,
        backgroundSize: 'cover',
    }
}

const content = {
    title: `Quem Somos`,
    text: [`O escritório Bianca Sefidvash Arquitetura + Interiores, comandado pela própria arquiteta, tem a região de Campinas/SP sua principal área de atuação.`,
    `Formada pela PUC, em Porto Alegre/RS, a arquiteta Bianca Sefidvash desenvolve projetos de Arquitetura Residencial e de Design de Interiores para clientes particulares e Corporativa, bem como atua na Gestão de Projetos e Administração de obra.`]
}

const QuemSomos = () => {

    return (
        <React.Fragment>
            <Row style={{backgroundColor: '#0fffff', height: '100vh'}}>
                <Col xs={4} style={style.image}></Col>
                <Col xs={0} md={6} className="table">
                    <MainText title={content.title} text={content.text} />
                </Col>
            </Row>
        </React.Fragment>
    );

}

export default QuemSomos;