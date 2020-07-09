import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FuncionalImg from './img/funcional_1.jpg';

const Funcional = () => {
    return(
        <React.Fragment>
            <Row style={{height: '50vh'}}>
                <Col xs={4}>
                    <h1>
                        Arquitetura Funcional e de Performance
                    </h1>
                    <p>
                        ARQUITETURA CORPORATIVA<br />
                        ÁREAS DE DESCOMPRESSÃO<br />
                        ESCRITORIOS PARTICULARES<br />
                        CLÍNICAS E ESPAÇOS DE SAÚDE<br />
                        PONTOS COMERCIAIS E LOJAS<br />
                        RESTAURANTES, CAFÉS E BARES<br />
                        ESTUDOS DE ACESSIBILIDADE
                    </p>
                    <br />
                    <img className="m-2" height={300} src={FuncionalImg} />
                </Col>
                <Col xs={4}>
                    <img className="m-2" height={300} src={FuncionalImg} /><br />
                    <img className="m-2" height={300} src={FuncionalImg} />
                </Col>
                <Col xs={4}>
                    <img className="m-2" height={300} src={FuncionalImg} /><br />
                    <img className="m-2" height={300} src={FuncionalImg} />
                </Col>
            </Row>
            

        </React.Fragment>
    )
}

export default Funcional;