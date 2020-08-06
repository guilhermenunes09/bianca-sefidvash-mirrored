import React from 'react';

import ResidencialImg1 from './img/residencial-1.jpg';
import ResidencialImg2 from './img/residencial-2.png';
import ResidencialImg3 from './img/residencial-3.jpg';
import ImageSwiper from '../components/swiper/imageSwiper.js';

import Img from '../components/img.js';

import MainText from '../components/mainText.js';
import Title from '../components/title.js';

const photos = [
    {src:ResidencialImg1,
    width:170,
    height:97,},
    {src:ResidencialImg2,
    width:300,
    height:174,},
    {src:ResidencialImg3,
    width:100,
    height:51,}
]

const content = {
    title: `Projetos de Arquitetura Residencial`,
    text: [`Para CONSTRUÇÃO DE HABITAÇÕES UNIFAMILIARES`,
          `Para HABITAÇÕES DE LAZER`,
          `Para REFORMA DE IMÓVEIS (Retrofit)`]
}
const Residencial = () => {
    return(
        <div id="page">
            <div className="text-center">
                <Title title={content.title} />
            </div>
            <div className="d-flex flex-row-reverse justify-content-center">
                <div className="my-flex-item">
                    <MainText text={content.text} />
                </div>
                <div className="my-flex-item">

                </div>
            </div>

            <div className="d-flex flex-row-reverse justify-content-center mb-4">
                <div className="my-flex-item swipe">
                    <ImageSwiper photos={photos} />
                </div>
            </div>
        </div>
    )
}

export default Residencial;