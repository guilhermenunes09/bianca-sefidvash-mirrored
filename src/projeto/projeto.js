import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import ProjetoImage from './img/projeto-10.jpg';

import MainText from '../components/mainText.js';

const style = {
    image: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
}

const content = {
    title: `O que Esperar de um projeto por arquiteta Bianca Safidvash`,
    text: [`1. PROJETOS que reflitam a personalidade do cliente, seus desejos, suas histórias, memórias afetivas e sonhos para o futuro. Unimos as particularidades do cliente à identidade arquitetônica contemporânea do escritório.`,
           `2. SOLUÇÕES únicas e criativas que garantam o melhor desempenho dos espaços – funcionalidade, otimização de recursos, fluxos,  percepção de conforto e bem estar aos usuários.`,
           `3. Relação próxima ao nosso cliente com confiabilidade e transparência no processo. PESSOALIDADE no atendimento.`,
           `4. Entrega de soluções COMPLETAS de arquitetura, desde a concepção criativa,  ao PLANEJAMENTO, à plena execução e entrega da obra.`,
           `5. GESTÃO SUSTENTÁVEL por meio da construção de relações de colaboração onde todos ganham -clientes, fornecedores e a sociedade em geral.`]
}

const Projeto = () => {
    return(
        <React.Fragment>
            <Row>
                <Col>              
                   <MainText title={content.title} />
                   { content.text && content.text.map((item, index) => {
                       console.log("item: " + item);
                       return(
                        <Card key={index}>
                            <Card.Body>{item}</Card.Body>
                        </Card>
                       )
                    })}
                </Col>
                <Col style={style.image}>
                    <img src={ProjetoImage} width={410} height={300} />
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Projeto;