import React from 'react';

import FuncionalImg1 from './img/funcional-1.png';
import FuncionalImg2 from './img/funcional-2.png';
import FuncionalImg3 from './img/funcional-3.png';
import FuncionalImg4 from './img/funcional-4.png';
import FuncionalImg5 from './img/funcional-5.png';

import Img from '../components/img';

import MainText from '../components/mainText.js';
import Title from '../components/title.js';


const content = {
    title: `Arquitetura Funcional e de Performance`,
    text: [`ARQUITETURA CORPORATIVA`, `ÁREAS DE DESCOMPRESSÃO`,
    `ESCRITORIOS PARTICULARES`,`CLÍNICAS E ESPAÇOS DE SAÚDE`,
    `PONTOS COMERCIAIS E LOJAS`, `RESTAURANTES, CAFÉS E BARES`, `ESTUDOS DE ACESSIBILIDADE`]
}

const Funcional = () => {
    return(
        <div id="page">

            <div className="d-flex flex-row justify-content-center">
                <div className="my-flex-item">
                    <Title title={content.title} />
                
                </div>
                <div className="my-flex-item">
                    <Img image={FuncionalImg1} alt={"Modelo 3D Casa"} />
                    <Img image={FuncionalImg2} alt={"Modelo 3D Casa"} />
                    <Img image={FuncionalImg3} alt={"Modelo 3D Casa"} />
                </div>
                <div className="my-flex-item">
                    <Img image={FuncionalImg4} alt={"Modelo 3D Casa"} />
                    <Img image={FuncionalImg5} alt={"Modelo 3D Casa"} />
                </div>

            </div>

        </div>
    )
}

export default Funcional;