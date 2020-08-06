import React from 'react';
import InterioresImg1 from './img/interiores-1.jpg';
import InterioresImg2 from './img/interiores-2.png';
import InterioresImg3 from './img/interiores-3.jpg';

import MainText from '../components/mainText.js';
import Title from '../components/title.js';
import ImageSwiper from '../components/swiper/imageSwiper.js';

import Img from '../components/img.js';

const photos = [{
    src:InterioresImg1,
        width:200,
        height:180,},
        {src:InterioresImg2,
        width:300,
        height:170,},
        {src:InterioresImg3,
        width:120,
        height:80,
}]

const content = {
    title: `Design de Interiores`,
    text: [`REFORMAS RESIDÊNCIAS – SALAS, QUARTOS, COZINHAS, BANHEIROS, etc;`, `PRODUÇÃO DE AMBIENTES – DECORAÇÃO, ASSESSORIA DE CORES E REVESTIMENTOS;`, `REFORMAS DE ÁREAS COMUNS - ÁREAS GOURMET, ESPAÇOS KIDS, ESPAÇOS PETS.`]
}

const Interiores = () => {
    return (
        <div id="page">
            <div className="text-center">
                <Title title={content.title} />
            </div>
            <div className="d-flex flex-row justify-content-center mb-4">
                <div className="my-flex-item swipe">
                    <ImageSwiper photos={photos} />
                </div>
            </div>
        </div>
    )
}

export default Interiores;