import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MainText from '../components/mainText.js';
import NossoServicosImg1 from './img/nossosservicos-01.svg';

const content = {
    title: `Nossos Serviços`,
    content: [`content`]
}

const Servicos = () => {
    return(
        <React.Fragment>
            <MainText title={content.title} text={content.text} />
            <img className="img-fluid" width={800} src={NossoServicosImg1} />
        </React.Fragment>
    )
}

export default Servicos;