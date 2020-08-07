import React from 'react';

import TrajetoriaImg from './img/trajetoria-lareira.jpg';
import MainText from '../components/mainText.js';
import Title from '../components/title.js';
import ImageSwiper from '../components/swiper/imageSwiper.js';

import Img from '../components/img.js';

const content = {
    title: `Trajetória`,
    text: [`Em Campinas desde 2008, a arquiteta gaúcha atua
    hoje no mercado paulista de arquitetura.
    Combina sua formação em Arquitetura,
    com a sua experiência em gestão dentro
    de grandes empresas.`, `Todo o seu conhecimento, hoje aplicado
    no dia a dia do escritório, valoriza
    cada detalhe e imprime a personalidade
    marcante do seu trabalho.`]
}

const photos = [{
    src: TrajetoriaImg,
    width: 1117,
    height: 777
}]

const Trajetoria = () => {
    return(
        <div id="page" name="trajetoria" style={{position: 'relative'}}>
            <div className="text-center">
                <Title title={content.title} />
            </div>
            <div className="d-flex flex-row justify-content-center">
                <div className="my-flex-item">
                    <ImageSwiper photos={photos} />
                </div>
                <div className="my-flex-item text">
                    <MainText text={content.text} />
                </div>
            </div>
        </div>
    )
}

export default Trajetoria;