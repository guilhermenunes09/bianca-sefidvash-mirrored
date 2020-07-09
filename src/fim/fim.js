import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import fimImg from './img/fim_1.jpg';

const style = {
    image: {
        backgroundImage: `url(${fimImg})`,
        backgroundSize: 'cover',
    }
}

const Fim = () => {
    return(
        <React.Fragment>
            <Row style={{height:'100vh'}}>
                <Col style={style.image}>1
                </Col>
                <Col>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Fim;