import React from 'react';

import Img from '../../components/img.js';
import GerenciamentoImg1 from './img/gerenciamento-1.jpg';
import GerenciamentoImg2 from './img/gerenciamento-2.jpg';
import GerenciamentoImg3 from './img/gerenciamento-3.jpg';
import GerenciamentoImg4 from './img/gerenciamento-4.png';

import ImageSwiper from '../../components/swiper/imageSwiper';
import Items from '../../components/list/items.js';

import MainText from '../../components/mainText.js';
import Title from '../../components/title.js';

const photos1 = [
    {src:GerenciamentoImg1,
    width:170,
    height:97,},
    {src:GerenciamentoImg2,
    width:117,
    height:78,},
]

const photos2 = [
    {src:GerenciamentoImg3,
    width:120,
    height:90,},
    {src:GerenciamentoImg4,
    width:150,
    height:125,},
]

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
            <div className="text-center">
                <Title title={content.c1.title} />
            </div>
                <div className="d-flex flex-row align-items-start justify-content-center pl-4 ml-4">
                    <div className="ml-4 d-flex flex-column align-items-start justify-content-center mb-4">
                        <Items item={"Diagnóstico"} />
                        <Items item={"Planejamento"} />
                        <Items item={"Controle Físico-Financeiro"} />
                        <Items item={"Homologação de Fornecedores"} />
                        <Items item={"Controle de Qualidade"}/>
                    </div>
                    <div style={{whiteSpace:'break-spaces'}} className="d-flex flex-column align-items-start justify-content-center mb-4">
                            <Items item={"Orçamento"} />
                            <Items item={"Acompanhamento"} />
                            <Items item={"Administração da Obra"} />
                            <Items item={"Compatibilização de Projetos Complementares"} />
                            <Items item={"Consultoria Específica"}/>
                    </div>
                </div>
            <div className="d-flex justify-content-center">
                <div className="official-container">
                    <div className="d-flex flex-lg-row flex-md-row flex-sm-column align-items-sm-center align-items-md-start justify-content-center">
                        <div className="swipe">
                            <ImageSwiper photos={photos1} />
                        </div>

                    </div>

                    <div className="d-flex flex-lg-row flex-md-row flex-sm-column align-items-sm-center align-items-md-start justify-content-center">
                        <div className="my-flex-item swipe">
                            <ImageSwiper photos={photos2} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Gerenciamento;