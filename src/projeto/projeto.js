import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProjetoImage from './img/projeto_1.jpg';

const style = {
    image: {
        backgroundColor: '#cc00cc',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
}

const Projeto = () => {
    return(
        <React.Fragment>
            <Row style={{backgroundColor: '#0fffff', height: '100vh'}}>
                <Col>              
                   
                    <h1>
                        O que esperar de um projeto por Arquiteta Bianca Sefidvash:
                    </h1>

                    <ol>
                        <li>
                        PROJETOS que reflitam a personalidade do cliente, seus desejos, suas histórias, memórias afetivas e sonhos para o futuro. Unimos as particularidades do cliente à identidade arquitetônica contemporânea do escritório.
                        </li>
                        <li>
                        SOLUÇÕES únicas e criativas que garantam o melhor desempenho dos espaços – funcionalidade, otimização de recursos, fluxos,  percepção de conforto e bem estar aos usuários.  
                        </li>
                        <li>
                        Relação próxima ao nosso cliente com confiabilidade e transparência no processo. PESSOALIDADE no atendimento.
                        </li>
                        <li>
                        Entrega de soluções COMPLETAS de arquitetura, desde a concepção criativa,  ao PLANEJAMENTO, à plena execução e entrega da obra.
                        </li>
                        <li>
                        GESTÃO SUSTENTÁVEL por meio da construção de relações de colaboração onde todos ganham -clientes, fornecedores e a sociedade em geral.
                        </li>
                    </ol>

                </Col>
                <Col style={style.image}>
                    <img src={ProjetoImage} width={410} height={300} />
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Projeto;