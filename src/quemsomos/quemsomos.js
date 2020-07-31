import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import QuemSomosImg from './img/quemsomos-1-02.png';
import MainText from '../components/mainText.js';

import './quemsomos.css';

const style = {
    image: {
        height: '100vh',
        backgroundColor: '#cc000c',
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
        <div className="d-flex flex-row-reverse justify-content-center">
            <div className="my-flex-item">
                <img className="img-fluid margin-up" src={QuemSomosImg} />
            </div>
            <div className="my-flex-item">
                <MainText title={content.title} text={content.text} />
            </div>
        </div>
    );

}

export default QuemSomos;