import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ResidencialImg from './img/residencial_1.jpg';

const style = {

    imageRight: {
        backgroundColor: '#cc00cc',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }

}
const Residencial = () => {
    return(
        <React.Fragment>
            <Row style={{height: '50vh'}}>
                <Col>
                    <h1>Projetos de Arquitetura Residencial</h1>
                    <p>
                        Para CONSTRUÇÃO DE HABITAÇÕES UNIFAMILIARES<br />
                        Para HABITAÇÕES DE LAZER<br />
                        Para REFORMA DE IMÓVEIS (Retrofit) 
                    </p>
                </Col>
                <Col style={style.imageRight}>
                    <img src={ResidencialImg} height={300} width={400} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={ResidencialImg} height={300} width={400} />
                </Col>
                <Col style={style.imageRight}>
                    <img style={style.imageRight} src={ResidencialImg} height={300} width={400} />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Residencial;