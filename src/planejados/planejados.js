import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PlanejadosImg1 from './img/planejados-1.jpg';
import PlanejadosImg2 from './img/planejados-2.jpg';
import PlanejadosImg3 from './img/planejados-3.jpg';

const style = {
    image: {
        backgroundColor: '#cc00cc',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
}

const Planejados = () => {
    return(
        <React.Fragment>
            <Row style={{height: '50vh'}}>
                <Col>
                    <h1>
                    Projeto de Marcenaria e Planejados
                    </h1>

                    <p>
                        DESIGN DE MÓVEIS <br />
                        PROJETO PARA MARCENARIA <br />
                        CONSULTORIA DE CORES E ACABAMENTOS
                    </p>
                </Col>
                <Col style={style.image}>
                    <img className="m-2" height={200} src={PlanejadosImg1} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="m-2" height={200} src={PlanejadosImg2} />
                    <img className="m-2" height={200} src={PlanejadosImg3} />
                </Col>
            </Row>
            

        </React.Fragment>
    )
}

export default Planejados;