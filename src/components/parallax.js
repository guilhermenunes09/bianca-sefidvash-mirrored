import React, { useEffect, useState } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useSpring, animated, config } from 'react-spring';



function Parallax (props) {
    const initialState = {
        numberLines: props.numberLines || 1,
        translateX: props.translateX || 800,
        translateY: -110,
        rotate: props.rotate || 0,
        formulaY1: 50,
        formulaX2: 1.2,
        y0: 0,
        y1: 4000,
        x1: props.x1 || 0,
        x2: props.x2 || 0,
    }

    const [numberLines, setNumberLines] = useState(initialState.numberLines);
    const [bodyHeight, setBodyHeight] = useState(100);
    const [bodyWidth, setBodyWidth] = useState(100);
    const [lineOpacity, setLineOpacity] = useState(1);

    const [translateX, setTranslateX] = useState(initialState.translateX);
    const [translateY, setTranslateY] = useState(initialState.translateY);
    const [rotate, setRotate] = useState(initialState.rotate);

    const [y1, sety1] = useState(initialState.y1);
    const [y2, sety2] = useState(initialState.y2);
    const [x1, setx1] = useState(initialState.x1);
    const [x2, setx2] = useState(initialState.x2);
    const [formulaY1, setFormulaY1] = useState(initialState.formulaY1);
    const [formulaX2, setFormulaX2] = useState(initialState.formulaX2);

    const svgProps = useSpring({
        from: {
            stroke: 0
        },
        to: {
            stroke: 100
        }
    });

    function scaleValue(value, from, to) {
        var scale = (to[1] - to[0]) / (from[1] - from[0]);
        var capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
        return (capped * scale + to[0]);
    }
  
    function handleOnScroll () {
        const wScrollY = window.scrollY;
        const range = scaleValue(wScrollY, [0, 350], [1,0.1]);
        console.log("range: " + range);
        if(range > 0.1) {
            setLineOpacity(range);
        }
    }

    useEffect(()=>{
        
        setBodyHeight(document.body.scrollHeight);
        setBodyWidth(document.body.scrollWidth);
        //window.addEventListener("scroll", handleOnScroll, {capture: true, passive: true}); 
    
    });

    const times = [];
    let fps;

    function refreshLoop() {
        window.requestAnimationFrame(() => {
            const now = performance.now();
            while (times.length > 0 && times[0] <= now - 1000) {
            times.shift();
            }
            times.push(now);
            fps = times.length;
            generateSVG();
            refreshLoop();
        });
    }

    refreshLoop();

    function generateSVG () {
        let rows = []

        const translateXs = "translate(" + translateX + "," + translateY + ") rotate(" + rotate + ")";
        for(let i=0; i< numberLines; i++) {
            rows.push (
                <svg height={bodyHeight - 15} width={bodyWidth} className="svg">
                    <line opacity={lineOpacity} transform={translateXs} x1={x1*i} y1={bodyHeight+ (initialState.y1 - window.scrollY*5.1)} x2={initialState.x2 - window.scrollY*1.1} y2={y2*i} className="background-line" />
                </svg>
            )
        }


        return rows;
    }

    function handleSliderX1 (value) {
        setx1(value);
    }
    function handleSliderX2 (value) {
        setx2(value);
    }
    function handleSliderY1 (value) {
        sety1(value);
    }
    function handleSliderY2 (value) {
        sety2(value);
    }
    function handleNumberLines (number) {
        setNumberLines(number);
    }

    function handleFormulaY1 (number) {
        setFormulaY1(number);
    }
    function handleFormulaX2 (number) {
        setFormulaX2(number);
    }
    function handleTranslateX (number) {
        setTranslateX(number);
    }
    function handleRotate (number) {
        setRotate(number);
    }

    
    return(
        <>  
            
            <div className="invisible" style={{display: "fixed", position: "fixed", right: "10px", bottom: "10px", width: "400px"}}>
                Input

                <div className="d-flex d-row justify-content-center align-items-center">
                    <div style={{width:'58px'}}>
                        TranslateX: 
                    </div>
                    <div className="my-flex-item">
                        <Slider value={translateX} min={-1500} max={1500} onChange={(value) => handleTranslateX(value)} />
                    </div>
                    <div style={{width:'28px'}}>
                        { translateX }
                    </div>
                </div>

                <div className="d-flex d-row justify-content-center align-items-center">
                    <div style={{width:'58px'}}>
                        Rotate: 
                    </div>
                    <div className="my-flex-item">
                        <Slider value={rotate} min={-180} max={180} onChange={(value) => handleRotate(value)} />
                    </div>
                    <div style={{width:'28px'}}>
                        { rotate }
                    </div>
                </div>

                <div className="d-flex d-row justify-content-center align-items-center">
                    <div style={{width:'58px'}}>
                        Formula x2: 
                    </div>
                    <div className="my-flex-item">
                        <input type="number" step="0.01" defaultValue={formulaX2} onChange={(e) => handleFormulaX2(e.currentTarget.value)} />
                    </div>
                </div>

                <div className="d-flex d-row justify-content-center align-items-center">
                    <div style={{width:'58px'}}>
                        Formula y1: 
                    </div>
                    <div className="my-flex-item">
                        <input type="number" step="0.01" defaultValue={formulaY1} onChange={(e) => handleFormulaY1(e.currentTarget.value)} />
                    </div>
                </div>
                
                <div className="d-flex d-row justify-content-center align-items-center">
                    <div style={{width:'58px'}}>
                        Lines: 
                    </div>
                    <div className="my-flex-item">
                        <input type="number" defaultValue={numberLines} onChange={(e) => handleNumberLines(e.currentTarget.value)} />
                    </div>
                </div>

                <div className="d-flex d-row justify-content-center">
                    <div style={{width:'28px'}}>
                        x1: 
                    </div>
                    <div className="my-flex-item">
                        <Slider value={x1} min={-2000} max={10000} onChange={(value) => handleSliderX1(value)} />
                    </div>
                    <div style={{width:'28px'}}>
                        { x1 }
                    </div>
                </div>
                <div className="d-flex d-row justify-content-center">
                    <div style={{width:'28px'}}>
                        x2: 
                    </div>
                    <div className="my-flex-item">
                        <Slider value={x2} min={-500} max={3000} onChange={(value) => handleSliderX2(value)} />
                    </div>
                    <div style={{width:'28px'}}>
                        { x2 }
                    </div>
                </div>
                <div className="d-flex d-row justify-content-center">
                    <div style={{width:'28px'}}>
                        y1: 
                    </div>
                    <div className="my-flex-item">
                        <Slider value={y1} min={-500} max={3000} onChange={(value) => handleSliderY1(value)} />
                    </div>
                    <div style={{width:'28px'}}>
                        { y1 }
                    </div>
                </div>
                <div className="d-flex d-row justify-content-center">
                    <div style={{width:'28px'}}>
                        y2: 
                    </div>
                    <div className="my-flex-item">
                        <Slider value={y2} min={-5000} max={3000} onChange={(value) => handleSliderY2(value)} />
                    </div>
                    <div style={{width:'28px'}}>
                        { y2 }
                    </div>
                </div>
            
            </div>
            { generateSVG() }
        </>
    );
}

export default Parallax;