import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Trajetoria = () => {
    return(
        <React.Fragment>
            <Row style={{backgroundColor: '#0fffff', height: '60vh'}}>
                <Col style={{backgroundColor: '#cc000c'}}>col1</Col>
                <Col style={{backgroundColor: '#ccc'}} xs={8}>
                    <div style={{paddingLeft:'7em'}}>
                        <h1>Trajetória</h1>
                    </div>
                    

                </Col>
            </Row>
            <Row>
                <Col>
                    Outro Teste
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Trajetoria;