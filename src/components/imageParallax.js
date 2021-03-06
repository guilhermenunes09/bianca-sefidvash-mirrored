import React from 'react';
import { Parallax, Background } from 'react-parallax';
import ImgParallaxInteriores from '../imgs/parallax/parallax-interiores-1.jpg';
import './imageParallax.css';
import Gallery from './gallery.js';
import Servicos from '../pages/servicos/servicos.js';

function ImageParallax (props) {
    return(
        <div id="page" >
            <Parallax
                blur={{ min: -15, max: 25 }}
                bgImage={props.image ? props.image : ImgParallaxInteriores}
                bgImageAlt="Background Parallax"
                strength={-200}
                style={{marginTop:'-100px'}}
            >
                {props.gallery && (
                    <div className="d-flex flex-row justify-content-center align-items-center" style={{ minHeight: '100vh', paddingTop: '2em', paddingBottom: '2em' }} >
                        <div className="my-flex-item">
                            <Servicos />
                        </div>
                    </div>
                )}
                {!props.gallery && (
                    <div style={{minHeight:'100vh'}} />
                )}
                
            </Parallax>
        </div>
    );
}

export default ImageParallax;