import React from 'react';

import MainText from '../components/mainText.js';
import Title from '../components/title.js';

const content = {
    title: `Nossas Forças`,
    content: [`content`]
}

const Forcas = () => {

    return(
        <div id="page">
            <div className="text-center">
                <Title title={content.title} name={"forcas"} />
            </div>
        </div>
    )
}

export default Forcas;
