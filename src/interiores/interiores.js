import React from 'react';
import InterioresImg1 from './img/interiores-1.jpg';
import InterioresImg2 from './img/interiores-2.png';
import InterioresImg3 from './img/interiores-3.jpg';

import MainText from '../components/mainText.js';

const content = {
    title: `Design de Interiores`,
    text: [`REFORMAS RESIDÊNCIAS – SALAS, QUARTOS, COZINHAS, BANHEIROS, etc;`,`PRODUÇÃO DE AMBIENTES – DECORAÇÃO, ASSESSORIA DE CORES E REVESTIMENTOS;`,`REFORMAS DE ÁREAS COMUNS - ÁREAS GOURMET, ESPAÇOS KIDS, ESPAÇOS PETS.`]
}

const Interiores = () => {
    return(
        <div id="page">
            <div className="d-flex flex-row-reverse justify-content-center">
                <div className="my-flex-item">
                    <MainText title={content.title} />
                  
                </div>
                <div className="my-flex-item">
                    <img alt="Modelo 3D Casa" className="img-fluid" src={InterioresImg1} height={300}  />
                </div>
            </div>

            <div className="d-flex flex-row-reverse justify-content-center mb-4">
                <div className="my-flex-item">
                    <img alt="Modelo 3D Casa" className="img-fluid" src={InterioresImg2} height={300}  />
                </div>
                <div className="my-flex-item">
                    <img alt="Modelo 3D Casa" className="img-fluid" src={InterioresImg3} height={300}  />
                </div>
            </div>
        </div>
    )
}

export default Interiores;