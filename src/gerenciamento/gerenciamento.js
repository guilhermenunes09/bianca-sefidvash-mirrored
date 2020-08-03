import React from 'react';

import Img from '../components/img.js';
import GerenciamentoImg1 from './img/gerenciamento-1.jpg';
import GerenciamentoImg2 from './img/gerenciamento-2.jpg';
import GerenciamentoImg3 from './img/gerenciamento-3.jpg';
import GerenciamentoImg4 from './img/gerenciamento-4.png';

import MainText from '../components/mainText.js';
import Title from '../components/title.js';


const content = {
    c1: {
        title: `Gerenciamento de Projeto`,
        content: [`DIAGNÓSTICO`, `PLANEJAMENTO`, `CONTROLE FÍSICO-FINANCEIRO`, `HOMOLOGAÇÃO DE FORNECEDORES`,`CONTROLE DE QUALIDADE`]
    },
    c2: {
        title: `Execução de Obra`,
        content: [`ORÇAMENTO`,`ACOMPANHAMENTO`,`ADMINISTRAÇÃO DA OBRA`,`COMPATIBILIZAÇÃO DE PROJETOS COMPLEMENTARES`,`CONSULTORIA ESPECÍFICA`]
    }
}

const Gerenciamento = () => {
    return(
        <div id="page">
            <div className="d-flex flex-lg-row flex-md-row flex-sm-column align-items-sm-center align-items-md-start justify-content-center">
                <div className="my-flex-item">
                    <Title title={content.c1.title} text={content.c1.text} />
       
                </div>
                <div className="my-flex-item">
                    <div className="d-flex flex-row justify-content-around">
                        <div className="my-flex-item-column flex-fill">
                            <Img image={GerenciamentoImg1} alt={"Modelo 3D Casa"} />
                            <Img image={GerenciamentoImg2} alt={"Modelo 3D Casa"} />

                        </div>
                        <div className="my-flex-item-column h-center mt-5 pt-4">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 m-5 h-center">
                "Frase de Inspiração"
            </div>
            <div className="d-flex flex-lg-row flex-md-row flex-sm-column align-items-sm-center align-items-md-start justify-content-center">
                <div className="my-flex-item">
    
                </div>
                <div className="my-flex-item">
                    <Img image={GerenciamentoImg3} alt={"Modelo 3D Casa"} />
                    <Img image={GerenciamentoImg4} alt={"Modelo 3D Casa"} />

                </div>
            </div>

        </div>
    )
}

export default Gerenciamento;