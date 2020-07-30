import React from 'react';

import MainText from '../components/mainText.js';

import {useSpring, animated} from 'react-spring';


const content = {
    title: `Nossas Forças`,
    content: [`content`]
}

const Forcas = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}})
    return(
        <React.Fragment>
            <MainText title={content.title} />


        </React.Fragment>
    )
}

export default Forcas;
