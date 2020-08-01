import React, {useEffect } from 'react';
import logo from '../imgs/logo.png';
import './home.css';

//import backgroundImage from '../imgs/home_bg.svg';
//import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import {useSpring, animated, config} from 'react-spring';

import Quemsomos from '../quemsomos/quemsomos.js';

//<svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1190.64 841.92"><defs><style>.cls-1{fill:none;stroke:#1f140f;stroke-miterlimit:10;stroke-width:9px;}</style></defs><line className="cls-1" x1="-10.74" y1="606.07" x2="799.9" y2="-8.42"/><line className="cls-1" x1="918.24" y1="-3.21" x2="918.24" y2="842.4"/><line className="cls-1" x1="948.95" y1="-6.88" x2="1149.66" y2="844.82"/></svg>

const Home = () => {

    // Deactivate Scrolling
    useEffect(()=> {
        //targetElement = document.querySelector('#body');
        //disableBodyScroll(targetElement);
        return () => {
            //Activate again
            //enableBodyScroll(targetElement);
        }
    });

    const props = useSpring(
    {
        config: {
            duration: 1000,
            ...config.gentle, precision: 0.0001
        },
        delay: 500,
        from: {
            opacity: 0,
            transform: 'translate3d(10px,0,0)',
        },
        to: {
            opacity: 1,
            transform: 'translate3d(0px,0,0)',
            
        },
        reset: true,
    });

    //const backgroundAnimation = useSpring({
    //    opacity: 1, from: {opacity: 0},
    //    config: { duration: 2000 }
    //})


    return(
        <>
            <div id="flexbox" className="fill-height d-flex justify-content-center align-items-center content-position">
                <animated.div style={props}>
                    <img src={logo} alt="Logo" style={{width: '300px'}} />
                </animated.div>
            </div>
            <Quemsomos />
        </>
    );

}

export default Home;