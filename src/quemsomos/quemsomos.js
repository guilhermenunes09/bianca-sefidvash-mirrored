import React from 'react';

import QuemSomosImg from './img/quemsomos-1-02.png';
import MainText from '../components/mainText.js';
import Img from '../components/img.js';
import Title from '../components/title.js';

import ImageSwiper from '../components/swiper/imageSwiper.js';

import './quemsomos.css';

const content = {
    title: `Quem Somos`,
    text: [`O escritório Bianca Sefidvash Arquitetura + Interiores, comandado pela própria arquiteta, tem a região de Campinas/SP sua principal área de atuação.`,
    `Formada pela PUC, em Porto Alegre/RS, a arquiteta Bianca Sefidvash desenvolve projetos de Arquitetura Residencial e de Design de Interiores para clientes particulares e Corporativa, bem como atua na Gestão de Projetos e Administração de obra.`]
}

const photos = [{
    src: QuemSomosImg,
    width: 961,
    height: 1281 
}]

const QuemSomos = () => {

    return (
            <div id="page" className="dark-mode" name="quemsomos">
                <div className="text-center">
                    <Title title={content.title} />
                </div>
                
                <div className="d-flex flex-row align-items-center justify-content-center">
                    <div className="my-flex-item">

                        <ImageSwiper photos={photos} />
                    </div>
                    <div className="my-flex-item">
                        <MainText text={content.text} />
                    </div>
                </div>
            </div>
    );

}

export default QuemSomos;