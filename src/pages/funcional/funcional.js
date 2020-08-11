import React from 'react';

import FuncionalImg1 from './img/funcional-1.png';
import FuncionalImg2 from './img/funcional-2.png';
import FuncionalImg3 from './img/funcional-3.png';
import FuncionalImg4 from './img/funcional-4.png';
import FuncionalImg5 from './img/funcional-5.png';

import Img from '../../components/img';

import MainText from '../../components/mainText.js';
import Title from '../../components/title.js';
import ImageSwiper from '../../components/swiper/imageSwiper';

const content = {
    title: `Arquitetura Funcional e de Performance`,
    text: [`ARQUITETURA CORPORATIVA`, `ÁREAS DE DESCOMPRESSÃO`,
    `ESCRITORIOS PARTICULARES`,`CLÍNICAS E ESPAÇOS DE SAÚDE`,
    `PONTOS COMERCIAIS E LOJAS`, `RESTAURANTES, CAFÉS E BARES`, `ESTUDOS DE ACESSIBILIDADE`]
}

const photos = [
    {src:FuncionalImg1,
        width:38,
        height:30,},
    {src:FuncionalImg2,
        width:38,
        height:30,},
    {src:FuncionalImg3,
        width:38,
        height:30,},
    {src:FuncionalImg4,
        width:38,
        height:30,},
    {src:FuncionalImg5,
        width:38,
        height:30,},    
]

const Funcional = () => {
    return(
        <div id="page">
            <div className="text-center">
                <Title title={content.title} />
            </div>
            <div className="d-flex flex-row justify-content-center">
                <div className="my-flex-item swipe">
                    <ImageSwiper photos={photos} />
                </div>
            </div>
        </div>
    )
}

export default Funcional;