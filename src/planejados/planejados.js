import React from 'react';

import PlanejadosImg1 from './img/planejados-1.jpg';
import PlanejadosImg2 from './img/planejados-2.jpg';
import PlanejadosImg3 from './img/planejados-3.jpg';

const Planejados = () => {
    return(
        <React.Fragment>

                    <h1>
                    Projeto de Marcenaria e Planejados
                    </h1>

                    <p>
                        DESIGN DE MÓVEIS <br />
                        PROJETO PARA MARCENARIA <br />
                        CONSULTORIA DE CORES E ACABAMENTOS
                    </p>

                    <img alt="Modelo 3D Casa" className="m-2" height={200} src={PlanejadosImg1} />

                    <img alt="Modelo 3D Casa" className="m-2" height={200} src={PlanejadosImg2} />
                    <img alt="Modelo 3D Casa" className="m-2" height={200} src={PlanejadosImg3} />

            

        </React.Fragment>
    )
}

export default Planejados;