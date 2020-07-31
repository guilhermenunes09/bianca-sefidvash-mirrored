import React, {useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../imgs/logo.png';
import './home.css';

import backgroundImage from '../imgs/home_bg.svg';
import Container from 'react-bootstrap/Container';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import {useSpring, animated} from 'react-spring';

const Home = () => {

    let targetElement = null;

    // Deactivate Scrolling
    useEffect(()=> {
        targetElement = document.querySelector('#body');
        disableBodyScroll(targetElement);
        return () => {
            //Activate again
            enableBodyScroll(targetElement);
        }
    });

    const props = useSpring(
        {
            config: {
                duration: 1000
            },
            opacity: 1, from: {opacity: 0}
        })

    return(
        <Container fluid className="">
            <div className="backgroundImage"></div>
            <div className="d-flex justify-content-center content-position">
                <animated.div style={props}>
                    <img src={logo} alt="Logo" style={{width: '300px'}} />
                </animated.div>

            </div>
        </Container>
    );

}

export default Home;