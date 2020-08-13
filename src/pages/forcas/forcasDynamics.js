import React, { useState } from 'react';
import Forcas from './forcas';
import { useSpring, animated } from "react-spring";
import './forcas.css';
import { Handle } from 'rc-slider';

function DynaPlane ({text}) {

    const [index, set] = useState(0);


    const props = useSpring({
        color: index ? 'black' : 'lightgray',
        transform: index ? 'perspective(600px) rotateY(0deg)' : 'perspective(600px) rotateY(45deg)',
        boxShadow: '2px 2px 5px -1px rgba(0,0,0,0.75)',
    });

    function handleMouseOver() {
        console.log("mouseOver");
        set(1);
    }

    function handleMouseOut() {
        console.log("mouse out");
        set(0);
    }


    return(
            
            <animated.div className="item-dynamics" style={props} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="dayna-plane">
                {text}
            </animated.div>

    );
}

function ForcasDynamics() {

    const content = {
        text: [`COMPREENSÃO DO BRIEFING [Desejos, necessidades e estilo do cliente]`,
               `LINGUAGEM ATUAL E CONTEMPORÂNEA ADAPTADA`,
               `ESPAÇOS VERSÁTEIS E ATEMPORAIS`,
               `PLANEJAMENTO E GESTÃO`,
               `PESSOALIDADE, COMPROMISSO E CONFIABILIDADE`,
               `PARTICIPAÇÃO DO CLIENTE NO PROCESSO [Client Experience]`               
                ]
    }

    return(
        <>
            <div style={{marginLeft: "-30px"}} className="d-flex flex-row justify-content-center align-items-center text-center flex-wrap">
                {content.text.map((item, key) => (
                    <DynaPlane text={item} />
                ))}
            </div>
        </>
    );
}

export default ForcasDynamics;