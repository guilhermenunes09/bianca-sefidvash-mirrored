import React from 'react';
import { Parallax, Background } from 'react-parallax';
import ImgParallaxInteriores from '../imgs/parallax/parallax-interiores-1.jpg';
import './imageParallax.css';

function ImageParallax () {
    return(
        <div style={{height: "100vh"}}>
            <Parallax
                blur={{ min: -30, max: 50}}
                bgImage={ImgParallaxInteriores}
                bgImageAlt="the dog"
                strength={-500}
            >
                Blur transition from min to max
                <div style={{ height: '100vh' }} />
            </Parallax>
        </div>
    );
}

export default ImageParallax;