import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import GerenciamentoImg from './img/gerenciamento_1.jpg';

//import GerenciamentoImg from './img/funcional_1.jpg';

const Gerenciamento = () => {
    return(
        <React.Fragment>
            <Row style={{height: '50vh'}}>
                <Col>
                <h1>Gerenciamento de Projeto</h1>
                <p>
                    DIAGNÓSTICO <br />
                    PLANEJAMENTO <br />
                    CONTROLE FÍSICO-FINANCEIRO <br />
                    HOMOLOGAÇÃO DE FORNECEDORES <br />
                    CONTROLE DE QUALIDADE
                </p>
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
                <h1>Execução de Obra</h1>
                <p>
                    ORÇAMENTO <br />
                    ACOMPANHAMENTO <br />
                    ADMINISTRAÇÃO DA OBRA <br />
                    COMPATIBILIZAÇÃO DE PROJETOS COMPLEMENTARES <br />
                    CONSULTORIA ESPECÍFICA
                </p> 
                </Col>
            </Row>
            
        </React.Fragment>
    )
}

export default Gerenciamento;