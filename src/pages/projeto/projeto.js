import React from 'react';

import ProjetoImage from './img/projeto-10.jpg';

import MainText from '../../components/mainText.js';
import Title from '../../components/title.js';
import PassingText from '../../components/spring/passingText.js';


import Img from '../../components/img.js';

const content = {
    title: `Projetos`,
    text: [`1. PROJETOS que reflitam a personalidade do cliente, seus desejos, suas histórias, memórias afetivas e sonhos para o futuro. Unimos as particularidades do cliente à identidade arquitetônica contemporânea do escritório.`,
           `2. SOLUÇÕES únicas e criativas que garantam o melhor desempenho dos espaços – funcionalidade, otimização de recursos, fluxos,  percepção de conforto e bem estar aos usuários.`,
        `3. Relação próxima ao nosso cliente com confiabilidade e transparência no processo. PESSOALIDADE no atendimento.`,
           `4. Entrega de soluções COMPLETAS de arquitetura, desde a concepção criativa,  ao PLANEJAMENTO, à plena execução e entrega da obra.`,
           `5. GESTÃO SUSTENTÁVEL por meio da construção de relações de colaboração onde todos ganham -clientes, fornecedores e a sociedade em geral.`]
}

const Projeto = () => {
    return(
        <div id="page" name={"projeto"} >
            <div className="d-flex flex-row justify-content-center align-items-center">
                <div style={{height: '300px'}}>
                    <PassingText />
                </div>
            </div>
        </div>

        
    );
}

export default Projeto;