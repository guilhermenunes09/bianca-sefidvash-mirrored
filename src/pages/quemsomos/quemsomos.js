import React, { useState, useEffect, useRef } from 'react';
import QuemSomosImg from './img/quemsomos-1-02.png';
import MainText from '../../components/mainText.js';
import Img from '../../components/img.js';
import Title from '../../components/title.js';
import {useSpring, animated} from 'react-spring';
import ImageSwiper from '../../components/swiper/imageSwiper.js';
import './quemsomos.css';
import Fade from 'react-reveal/Fade';



const content = {
    title: `Quem Somos`,
}

const photos = [{
    src: QuemSomosImg,
    width: 961,
    height: 1281 
}]

const QuemSomos = () => {
    
    let offset = 0;
    const refElement = useRef();
    const [hidden, setHidden] = useState(1);
    const props = useSpring({
        opacity: hidden ? 0 : 1
    });

    function handleOnScroll (scrollY, offset, windowHeight){
        console.log("OFFSET");
        console.log(offset)
        if(offset < windowHeight) {
            console.log("fIRED");
            if(hidden === 0) {
                setHidden(1);
            }
        } else {
            setHidden(0);
            console.log("OFF");
        }
    }

    useEffect(()=>{

    }, []);

    useEffect(()=>{

    },[]);

    return (
            <div id="page" className="dark-mode" name="quemsomos">


                  
                    
                    

                    <Fade delay={500}>
                        <animated.div className="no-border border-test d-flex flex-row flex-wrap align-items-center">
                            <div className="my-flex-item quemsomos-background">
                               
                            </div>
                            <div className="my-flex-item text">
                                <div className="text-center">
                                    <Title title={content.title} />
                                </div>
                                <p>O escritório <strong>Bianca Sefidvash Arquitetura + Interiores</strong>, comandado pela própria arquiteta na região de Campinas/SP. Sua principal área de atuação.</p>
                                <p>Formada pela PUC, em Porto Alegre/RS, a arquiteta Bianca Sefidvash desenvolve projetos de <strong>Arquitetura Residencial</strong> e de <strong>Design de Interiores</strong> para clientes particulares e Corporativa, bem como atua na Gestão de Projetos e Administração de obra.</p>
                            </div>
                        </animated.div>
                    </Fade>

            </div>
    );

}

export default QuemSomos;