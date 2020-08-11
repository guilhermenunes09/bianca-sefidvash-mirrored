import React from 'react';

import MainText from '../../components/mainText.js';
import Title from '../../components/title.js';

import NossoServicosImg1 from './img/nossosservicos-01.svg';

import Residencial from '../residencial/residencial.js';
import Interiores from '../interiores/interiores.js';
import Funcional from '../funcional/funcional.js';

import Img from '../../components/img.js';

const content = {
    title: `Nossos Serviços`,
    content: [`content`]
}

const Servicos = () => {
    return(
        <div id="page">
            <div className="text-center">
                <Title title={content.title} />
            </div>
            <div className="d-flex justify-content-center">
                <div className="official-container">
                    <Interiores />
                    <Residencial />
                    <Funcional />
                </div>
            </div>
        </div>
    )
}

export default Servicos;