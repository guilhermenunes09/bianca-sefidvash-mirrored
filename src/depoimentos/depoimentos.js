import React from 'react';
import Title from '../components/title.js';

const Depoimentos = () => {
    return(
        <div id="page" name={"depoimentos"}>

            <div className="text-center">
                <Title title={"Depoimentos"} />
            </div>

           <p>
            ”Excelente profissional com muita criatividade e
            empatia para atender as necessidades dos clientes.”
           </p>
           <p>
            “Pra mim uma das coisas que mais se destaca nos
            teus projetos : criatividade, unindo custo com
            ótimas soluções e bom gosto.”
           </p>
           <p>
            “Foi a segunda vez que contamos com as soluções
            da Arquiteta Bianca. Em 2013, ela nos surpreendeu
            deixando o nosso apartamento prático, confortável,
            funcional e de extremo bom gosto. Agora em 2020, a
            Arquiteta superou novamente as nossa expectativas.
            A renovação do nosso espaço ficou incrível e muito agradável.”   
           </p>
        </div>
    )
}

export default Depoimentos;