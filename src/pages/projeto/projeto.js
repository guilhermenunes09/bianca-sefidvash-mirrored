import React from 'react';

import ProjetoImage from './img/projeto-10.jpg';

import MainText from '../../components/mainText.js';
import Title from '../../components/title.js';
import ImageSwiper from '../../components/swiper/imageSwiper.js';
import './projeto.css';

import Img from '../../components/img.js';

const content = {
    title: `Projetos`,
    text: [`PROJETOS que reflitam a personalidade do cliente, seus desejos, suas histórias, memórias afetivas e sonhos para o futuro. Unimos as particularidades do cliente à identidade arquitetônica contemporânea do escritório.`,
           `SOLUÇÕES únicas e criativas que garantam o melhor desempenho dos espaços – funcionalidade, otimização de recursos, fluxos,  percepção de conforto e bem estar aos usuários.`,
        `Relação próxima ao nosso cliente com confiabilidade e transparência no processo. PESSOALIDADE no atendimento.`,
           `Entrega de soluções COMPLETAS de arquitetura, desde a concepção criativa,  ao PLANEJAMENTO, à plena execução e entrega da obra.`,
           `GESTÃO SUSTENTÁVEL por meio da construção de relações de colaboração onde todos ganham -clientes, fornecedores e a sociedade em geral.`]
}

const photos = [
    {src: ProjetoImage,
    with: 90,
    height: 16,}
]

const Projeto = () => {
    return(
        <div id="page" name={"projeto"} >
            <div className="d-flex flex-row justify-content-center align-items-center border-test">
                <div className="my-flex-item">
                    <ul className="project-list">
                        {content.text.map((item, index)=>(
                        <li className="pb-2">{item}</li>   
                        ))}
                    </ul>
                </div>
                <div className="my-flex-item">
                    <ImageSwiper photos={photos} />
                </div>
            </div>
        </div>

        
    );
}

export default Projeto;