import React from 'react';
import ImgLego from '../../imgs/icons/BuildingBlocksAmico.svg';
import ImgFuncional from '../../imgs/icons/CompanyAmico.svg';
import ImgConstruction from '../../imgs/icons/ConstructionAmico.svg';

import ImgHouseGlass from '../../imgs/icons/HouseSearchingBro.svg';
import ImgHouses from '../../imgs/icons/HousesAmico.svg';
import ImgKidsStudyingFromHome from '../../imgs/icons/KidsStudyingfromHomeAmico.svg';


import './servicosIcons.css';

function Icon ({image, label}) {
    return(
        <>
            <div className="">
                <div className="d-flex flex-column justify-content-center align-items-center my-flex-item-icon">
                    <div className="my-flex-item-column">
                        <img src={image} width={150} />
                    </div>
                    <div style={{ whiteSpace: 'pre-line' }} className="my-flex-item-icon-text text-center">
                        {label}
                    </div>
                </div>
            </div>
        </>
    );
}

function ServicosIcons () {

    return(
        <>
            <div id="page" className="d-flex flex-row justify-content-center align-items-center">
                <Icon image={ImgHouseGlass} label={"Projetos de Arquitetura \nResidencial"} />
                <Icon image={ImgKidsStudyingFromHome} label={"Design de Interiores"} />
                <Icon image={ImgFuncional} label={`Arquitetura Funcional \nde Performance`} />
                <Icon image={ImgLego} label={"Design de Móveis \n Planejados"} />
            </div>
        </>
    );
}

export default ServicosIcons;