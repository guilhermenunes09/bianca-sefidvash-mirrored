import React from 'react';

import QuemSomosImg from './img/quemsomos-1-02.png';
import MainText from '../components/mainText.js';
import Img from '../components/img.js';
import Title from '../components/title.js';

import ImageSwiper from '../components/swiper/imageSwiper.js';

import './quemsomos.css';

const content = {
    title: `Quem Somos`,
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
                        <div className="my-flex-item text">
                            <p>O escritório <strong>Bianca Sefidvash Arquitetura + Interiores</strong>, comandado pela própria arquiteta, tem a região de Campinas/SP sua principal área de atuação.</p>
                            <p>Formada pela PUC, em Porto Alegre/RS, a arquiteta Bianca Sefidvash desenvolve projetos de <strong>Arquitetura Residencial</strong> e de <strong>Design de Interiores</strong> para clientes particulares e Corporativa, bem como atua na Gestão de Projetos e Administração de obra.</p>
                        </div>
                    </div>
       
            </div>
    );

}

export default QuemSomos;