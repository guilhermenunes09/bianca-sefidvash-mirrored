import React from 'react';
import { Parallax, Background } from 'react-parallax';
import ImgParallaxInteriores from '../imgs/parallax/parallax-interiores-1.jpg';
import './imageParallax.css';
import Gallery from '../components/gallery.js';

function ImageParallax () {
    return(
        <div id="page" >
            <Parallax
                blur={{ min: -30, max: 50}}
                bgImage={ImgParallaxInteriores}
                bgImageAlt="the dog"
                strength={-500}
            >
                <div className="d-flex flex-row justify-content-center align-items-center" style={{ minHeight: '100vh', paddingTop: '2em', paddingBottom: '2em' }} >
                    <div className="my-flex-item" style={{backgroundColor: 'white', width:'700px'}}>
                        <Gallery />
                    </div>
                </div>
                
            </Parallax>
        </div>
    );
}

export default ImageParallax;