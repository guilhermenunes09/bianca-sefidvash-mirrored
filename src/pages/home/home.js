import React, {useEffect, useContext, useState } from 'react';
import logo from '../../imgs/logo.png';
import './home.css';

import backgroundSVG from '../../imgs/backgroundhome-07-07.svg';

//import backgroundImage from '../../imgs/home_bg.svg';
//import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import {useSpring, animated, config} from 'react-spring';
import Quemsomos from '../quemsomos/quemsomos.js';
import Trajetoria from '../trajetoria/trajetoria.js';
import Projeto from '../projeto/projeto.js';
import Forcas from '../forcas/forcas.js';
import Depoimentos from '../depoimentos/depoimentos.js';
import ServicosIcons from '../../components/icons/servicosIcons.js';
import SubMenu from '../../components/submenu.js';
import ImageParallax from '../../components/imageParallax.js';
import Parallax from '../../components/parallax';
import ImageParallax1 from '../../imgs/parallax/parallax-1.jpg';
import Gallery from '../../components/gallery.js';
import Quote from '../../components/quotationmarks.js';
import { setMenuContext } from '../../contexts/menuContext.js';


//<svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1190.64 841.92"><defs><style>.cls-1{fill:none;stroke:#1f140f;stroke-miterlimit:10;stroke-width:9px;}</style></defs><line className="cls-1" x1="-10.74" y1="606.07" x2="799.9" y2="-8.42"/><line className="cls-1" x1="918.24" y1="-3.21" x2="918.24" y2="842.4"/><line className="cls-1" x1="948.95" y1="-6.88" x2="1149.66" y2="844.82"/></svg>

const Home = () => {

    const setMenu = useContext(setMenuContext);
    useEffect(()=>{
        setMenu(false);
    },[]);

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
        reset: false,
    });

    //const backgroundAnimation = useSpring({
    //    opacity: 1, from: {opacity: 0},
    //    config: { duration: 2000 }
    //})

    //<Parallax />
    //<Parallax numberLines={2} x1={-1363} x2={270} y1={1619} translateX={277} rotate={18}/>


    return(
        <>

            <div className="home-background" />
            <div id="flexbox" className="fill-height d-flex justify-content-center align-items-center content-position home-zindex">
                
                    <animated.div className="logoWrap" style={props}>
                        <img className="mainLogo" src={logo} alt="Logo" style={{width: '450px'}} />
                    </animated.div>
                
            </div>
        

            

            <Quemsomos />
            <Trajetoria />
            <ServicosIcons />
           
            <ImageParallax gallery />
            <Quote quotation={"A gente tem que sonhar, senão as coisas não acontecem."} author={"Oscar Niemeyer"}/>
            <Forcas />
            <Projeto />
            <ImageParallax image={ImageParallax1} />
            
            <Depoimentos />

     
        </>
    );

}

export default Home;