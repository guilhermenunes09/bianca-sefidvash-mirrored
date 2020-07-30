import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ResidencialImg1 from './img/residencial-5.jpg';
import ResidencialImg2 from './img/residencial-6.png';
import ResidencialImg3 from './img/residencial-seacost.jpg';

import MainText from '../components/mainText.js';

import Card from '../components/spring/card.js';


const style = {
    imageRight: {
        backgroundColor: '#cc00cc',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
}

const content = {
    title: `Projetos de Arquitetura Residencial`,
    text: [`Para CONSTRUÇÃO DE HABITAÇÕES UNIFAMILIARES`,
          `Para HABITAÇÕES DE LAZER`,
          `Para REFORMA DE IMÓVEIS (Retrofit)`]
}
const Residencial = () => {
    return(
        <React.Fragment>
            <Row style={{height: '50vh'}}>
                <Col>
                    <MainText title={content.title} text={content.text} />
                </Col>
                <Col>
                    
                    <Card image={window.location.origin + ResidencialImg2} />
                   
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card image={window.location.origin + ResidencialImg1} />
                </Col>
                <Col>
                    <Card image={window.location.origin + ResidencialImg3} />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Residencial;