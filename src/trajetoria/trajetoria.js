import React from 'react';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TrajetoriaImg from './img/trajetoria-lareira.jpg';
import MainText from '../components/mainText.js';

const style = {
    image: {
        backgroundColor: '#cc000c',
        backgroundImage: `url(${TrajetoriaImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right'
    },
    trajetoria: {
        padding: '6em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

const content = {
    title: `Trajetória`,
    text: [`Em Campinas desde 2008, a arquiteta gaúcha atua
    hoje no mercado paulista de arquitetura.
    Combina sua formação em Arquitetura,
    com a sua experiência em gestão dentro
    de grandes empresas.`, `Todo o seu conhecimento, hoje aplicado
    no dia a dia do escritório, valoriza
    cada detalhe e imprime a personalidade
    marcante do seu trabalho.`]
}

const Trajetoria = () => {
    return(

        <div className="d-flex flex-row justify-content-center">
            <div className="my-flex-item">
                <img className="img-fluid" src={TrajetoriaImg} />
            </div>
            <div className="my-flex-item">
                <MainText title={content.title} text={content.text} />
            </div>
        </div>

    )
}

export default Trajetoria;