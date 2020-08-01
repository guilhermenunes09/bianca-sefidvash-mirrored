import React from 'react';

import MainText from '../components/mainText.js';
import NossoServicosImg1 from './img/nossosservicos-01.svg';

import Residencial from '../residencial/residencial.js';
import Interiores from '../interiores/interiores.js';
import Funcional from '../funcional/funcional.js';

const content = {
    title: `Nossos Serviços`,
    content: [`content`]
}

const Servicos = () => {
    return(
        <div id="page">
            <div className="d-flex flex-row-reverse justify-content-center">
                <div className="">
                    <MainText title={content.title} text={content.text} />
                    <img alt="Modelo 3D Casa" className="img-fluid" width={800} src={NossoServicosImg1} />
                </div>
            </div>
            <div className="fill-height m-5 p-5">
                <Interiores />
            </div>
            <div className="fill-height m-5 p-5">
                <Residencial />
            </div>
            <div className="fill-height m-5 p-5">
                <Funcional />
            </div>
        </div>
    )
}

export default Servicos;