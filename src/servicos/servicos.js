import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MainText from '../components/mainText.js';

const content = {
    title: `Nossos Serviços`,
    content: [`content`]
}

const Servicos = () => {
    return(
        <React.Fragment>
            <MainText title={content.title} text={content.text} />
        </React.Fragment>
    )
}

export default Servicos;