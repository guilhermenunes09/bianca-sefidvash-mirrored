import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import GerenciamentoImg from './img/gerenciamento_1.jpg';

import MainText from '../components/mainText.js';

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
        <React.Fragment>
            <Row style={{height: '50vh'}}>
                <Col>
                    <MainText title={content.c1.title} text={content.c1.text} />
                </Col>
                <Col>
                    <img className="m-2" height={200} src={GerenciamentoImg} />
                </Col>
            </Row>
            <Row>
                <Col>
                    “INSERIR FRASE DE INSPIRACAO”
                    POR ALGUEM 
                </Col>
                <Col>
                    <MainText title={content.c2.title} text={content.c2.text} />
                </Col>
            </Row>
            
        </React.Fragment>
    )
}

export default Gerenciamento;