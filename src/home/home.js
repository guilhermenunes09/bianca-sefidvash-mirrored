import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../logo512.png';

const Home = () => {

    return(
        <React.Fragment>
            <Row style={{backgroundColor: '#0fffff', height: '100vh'}}>
                <Col xs={6} style={{backgroundColor:'#fff0ff', textAlign: 'right', position: 'relative'}}>              
                    <img src={logo} alt="Logo" height={200} width={400} style={{position: 'absolute', top: '50%', right: '0'}} />
                </Col>
                <Col></Col>
            </Row>
        </React.Fragment>
    );

}

export default Home;