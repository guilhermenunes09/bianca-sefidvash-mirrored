import React from 'react';

import ResidencialImg1 from './img/residencial-5.jpg';
import ResidencialImg2 from './img/residencial-6.png';
import ResidencialImg3 from './img/residencial-seacost.jpg';

import MainText from '../components/mainText.js';

const content = {
    title: `Projetos de Arquitetura Residencial`,
    text: [`Para CONSTRUÇÃO DE HABITAÇÕES UNIFAMILIARES`,
          `Para HABITAÇÕES DE LAZER`,
          `Para REFORMA DE IMÓVEIS (Retrofit)`]
}
const Residencial = () => {
    return(
        <div id="page">
            <div className="d-flex flex-row-reverse justify-content-center">
                <div className="my-flex-item">
                    <MainText title={content.title} text={content.text} />
                </div>
                <div className="my-flex-item">
                    <img alt="Modelo 3D Casa" className="img-fluid" src={ResidencialImg2} />
                </div>
            </div>

            <div className="d-flex flex-row-reverse justify-content-center mb-4">
                <div className="my-flex-item">
                    <img alt="Modelo 3D Casa" className="img-fluid" src={ResidencialImg1} />
                </div>
                <div className="my-flex-item">
                    <img alt="Modelo 3D Casa" className="img-fluid" src={ResidencialImg3} />
                </div>
            </div>
        </div>
    )
}

export default Residencial;