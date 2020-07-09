import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const QuemSomos = () => {

    return (
        <React.Fragment>
            <Row style={{backgroundColor: '#0fffff', height: '100vh'}}>
                <Col style={{backgroundColor: '#cc000c'}}>col1</Col>
                <Col xs={0} md={6} style={{backgroundColor: '#ccc'}}>
                    <div>
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