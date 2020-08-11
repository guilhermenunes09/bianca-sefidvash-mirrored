import React from 'react';
import Title from '../../components/title.js';
import Fade from 'react-reveal/Fade';
import Quote2 from '../../components/quotationmarks2.js';

const content = {
    quote1: "Excelente profissional com muita criatividade e empatia para atender as necessidades dos clientes.",
    quote2: "Pra mim uma das coisas que mais se destaca nos teus projetos : criatividade, unindo custo com ótimas soluções e bom gosto.",
    quote3: `Foi a segunda vez que contamos com as soluções
    da Arquiteta Bianca. Em 2013, ela nos surpreendeu deixando
    o nosso apartamento prático, confortável, funcional e de
    extremo bom gosto. Agora em 2020, a Arquiteta superou novamente
    as nossa expectativas. A renovação do nosso espaço ficou incrível
    e muito agradável.`,
}

const Depoimentos = () => {
    return(
        <div id="page" name={"depoimentos"}>

            <div className="text-center">
                <Title title={"Depoimentos"} />
            </div>

            <Fade delay={500} >
                <div className="d-flex justify-content-center flex-wrap">
                    <div className="container">
                        <Quote2 quotation={content.quote1} author={""} />
                        <Quote2 quotation={content.quote2} author={""} />
                        <Quote2 quotation={content.quote3} author={""} />
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Depoimentos;