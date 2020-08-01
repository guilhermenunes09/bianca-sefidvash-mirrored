import React from 'react';

import FuncionalImg1 from './img/funcional-1.png';
import FuncionalImg2 from './img/funcional-2.png';
import FuncionalImg3 from './img/funcional-3.png';
import FuncionalImg4 from './img/funcional-4.png';
import FuncionalImg5 from './img/funcional-5.png';

import MainText from '../components/mainText.js';

const content = {
    title: `Arquitetura Funcional e de Performance`,
    text: [`ARQUITETURA CORPORATIVA`, `ÁREAS DE DESCOMPRESSÃO`,
    `ESCRITORIOS PARTICULARES`,`CLÍNICAS E ESPAÇOS DE SAÚDE`,
    `PONTOS COMERCIAIS E LOJAS`, `RESTAURANTES, CAFÉS E BARES`, `ESTUDOS DE ACESSIBILIDADE`]
}

const Funcional = () => {
    return(
        <div id="page">

            <div className="d-flex flex-row justify-content-center">
                <div className="my-flex-item">
                    <MainText title={content.title} />
                
                </div>
                <div className="my-flex-item">
                    <img alt="Modelo 3D Casa" className="img-fluid" src={FuncionalImg1} height={300}  />
                    <img alt="Modelo 3D Casa" className="img-fluid" src={FuncionalImg2} height={300}  />
                    <img alt="Modelo 3D Casa" className="img-fluid" src={FuncionalImg3} height={300}  />
                </div>
                <div className="my-flex-item">
                    <img alt="Modelo 3D Casa" className="img-fluid" src={FuncionalImg4} height={300}  />
                    <img alt="Modelo 3D Casa" className="img-fluid" src={FuncionalImg5} height={300}  />
                </div>

            </div>

        </div>
    )
}

export default Funcional;