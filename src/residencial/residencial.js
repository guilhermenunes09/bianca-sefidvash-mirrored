import React from 'react';

import ResidencialImg1 from './img/residencial-5.jpg';
import ResidencialImg2 from './img/residencial-6.png';
import ResidencialImg3 from './img/residencial-seacost.jpg';

import Img from '../components/img.js';

import MainText from '../components/mainText.js';
import Title from '../components/title.js';


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
                    <Title title={content.title} />
                    <MainText text={content.text} />
                </div>
                <div className="my-flex-item">
                    <Img image={ResidencialImg2} alt={"Modelo 3D Casa"} />
                </div>
            </div>

            <div className="d-flex flex-row-reverse justify-content-center mb-4">
                <div className="my-flex-item">
                    <Img image={ResidencialImg1} alt={"Modelo 3D Casa"} />
                </div>
                <div className="my-flex-item">
                    <Img image={ResidencialImg3} alt={"Modelo 3D Casa"} />
                </div>
            </div>
        </div>
    )
}

export default Residencial;