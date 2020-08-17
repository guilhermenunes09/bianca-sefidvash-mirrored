import React, {useEffect, useContext} from 'react';
import Title from '../../components/title.js';
import Residencial from '../residencial/residencial.js';
import Interiores from '../interiores/interiores.js';
import Funcional from '../funcional/funcional.js';
import { setMenuContext } from '../../contexts/menuContext.js';
import './servicos.css';

const content = {
    title: `NOSSOS SERVIÇOS`,
    content: [`content`]
}

const Servicos = () => {

    const setMenu = useContext(setMenuContext);
    useEffect(()=>{
        setMenu(false);
    },[]);

    return(
        <div id="page">
            <div className="box-wraper border-test">
                <div className="white-box rounded shadow">
                    <div className="text-center">
                        <Title title={content.title} />
                    </div>
                    <div>
                        <div>
                            <Interiores />
                            <Residencial />
                            <Funcional />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicos;