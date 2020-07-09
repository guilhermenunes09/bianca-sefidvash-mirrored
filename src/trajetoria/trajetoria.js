import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TrajetoriaImg from './img/trajetoria_1.gif';

const style = {
    image: {
        backgroundColor: '#cc000c',
        backgroundImage: `url(${TrajetoriaImg})`,
    },
    trajetoria: {
        backgroundColor: '#cc00cc',
        padding: '6em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

const Trajetoria = () => {
    return(
        <React.Fragment>
            <Row style={{backgroundColor: '#0fffff', height: '60vh'}}>
                <Col xs={4} style={style.image} />
                <Col style={style.trajetoria}>
                    <div style={{paddingLeft:'7em'}}>
                        <h1>Trajetória</h1>
                        <p>Em Campinas desde 2008, a arquiteta gaúcha atua
                            hoje no mercado paulista de arquitetura.
                            Combina sua formação em Arquitetura,
                            com a sua experiência em gestão dentro
                            de grandes empresas.</p>

                        <p>Todo o seu conhecimento, hoje aplicado
                            no dia a dia do escritório, valoriza
                            cada detalhe e imprime a personalidade
                            marcante do seu trabalho.</p>
                    </div>

                </Col>
            </Row>
            <Row>
                <Col>

                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Trajetoria;