import React from 'react';
import ImgBuilding from '../../imgs/icons/BuildingBlocksAmico.svg';
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
                        <img src={image} width={100} />
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
            <div className="d-flex flex-row justify-content-center align-items-center">
                <Icon image={ImgBuilding} label={"Outro Texto"} />
                <Icon image={ImgHouses} label={"Outro Texto"} />
                <Icon image={ImgConstruction} label={"Outro Texto"} />
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <Icon image={ImgHouseGlass} label={"Projetos de Arquitetura \nResidencial"} />
                <Icon image={ImgKidsStudyingFromHome} label={"Design de Interiores"} />
                <Icon image={ImgFuncional} label={`Arquitetura Funcional \nde Performance`} />
                
            </div>
        </>
    );
}

export default ServicosIcons;