import React from 'react';
import InterioresImg1 from './img/interiores-1.jpg';
import InterioresImg2 from './img/interiores-2.png';
import InterioresImg3 from './img/interiores-3.jpg';

import MainText from '../components/mainText.js';
import Title from '../components/title.js';


import Img from '../components/img.js';

const content = {
    title: `Design de Interiores`,
    text: [`REFORMAS RESIDÊNCIAS – SALAS, QUARTOS, COZINHAS, BANHEIROS, etc;`,`PRODUÇÃO DE AMBIENTES – DECORAÇÃO, ASSESSORIA DE CORES E REVESTIMENTOS;`,`REFORMAS DE ÁREAS COMUNS - ÁREAS GOURMET, ESPAÇOS KIDS, ESPAÇOS PETS.`]
}

const Interiores = () => {
    return(
        <div id="page">
            <div className="d-flex flex-row-reverse justify-content-center">
                <div className="my-flex-item">
                    <Title title={content.title} />
                </div>
                <div className="my-flex-item">
                    <Img image={InterioresImg1} alt={"Modelo 3D Casa"} />
                </div>
            </div>

            <div className="d-flex flex-row-reverse justify-content-center mb-4">
                <div className="my-flex-item">
                    <Img image={InterioresImg2} alt={"Modelo 3D Casa"} />
                </div>
                <div className="my-flex-item">
                    <Img image={InterioresImg3} alt={"Modelo 3D Casa"} />
                </div>
            </div>
        </div>
    )
}

export default Interiores;