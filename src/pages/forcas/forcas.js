import React from 'react';

import MainText from '../../components/mainText.js';
import Title from '../../components/title.js';
import ForcasDynamics from './forcasDynamics.js';
import Fade from 'react-reveal/Fade';


const content = {
    title: `Nossas Forças`,
    content: [`content`]
}

const Forcas = () => {

    return(
        <div id="page" name={"forcas"} c >
            <div className="text-center">
                <Title title={content.title} />
            </div>
            <Fade delay={500}>
                <ForcasDynamics />
            </Fade>

        </div>
    )
}

export default Forcas;
