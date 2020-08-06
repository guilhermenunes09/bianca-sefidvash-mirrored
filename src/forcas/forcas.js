import React from 'react';

import MainText from '../components/mainText.js';
import Title from '../components/title.js';
import ForcasDynamics from './forcasDynamics.js';

const content = {
    title: `Nossas Forças`,
    content: [`content`]
}

const Forcas = () => {

    return(
        <div id="page" name={"forcas"} >
            <div className="text-center">
                <Title title={content.title} />
            </div>
            <ForcasDynamics />
        </div>
    )
}

export default Forcas;
