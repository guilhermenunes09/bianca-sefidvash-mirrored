import React, { useEffect, useState, useRef, useCallback } from 'react';
import "./submenu.css";
import { Link as LinkSame, scroller, Events } from 'react-scroll'
import { useSpring, useTransition, animated, config } from 'react-spring';
import { Handle } from 'rc-slider';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

function SubMenuDom (props) {
    return(
        <>
            <LinkSame to="quemsomos" smooth={true}>
                <div className="submenu-item">
                    Quem Somos
                </div>
            </LinkSame>
            <LinkSame to="trajetoria" smooth={true}>
                <div className="submenu-item">
                    Trajetória
                </div>
            </LinkSame>
            <LinkSame to="projeto" smooth={true}>
                <div className="submenu-item">
                    Projetos
                </div>
            </LinkSame>
            <LinkSame to="forcas" smooth={true}>
                <div className="submenu-item">
                    Nossas Forças
                </div>
            </LinkSame>
            <LinkSame to="depoimentos" smooth={true}>
                <div className="submenu-item">
                    Depoimentos
                </div>
            </LinkSame>
        </>
    );
}


function SubMenu () {

    const someRefName = useRef();
    const [sticky, setSticky] = useState(0);
    let offset = 0;
    const index=0;
    
    const propsSpring2 = useSpring({
        config: { duration: 300 },
    
            opacity: sticky ? 1 : 0.9,
            position: sticky ? 'fixed' : 'absolute',
            color: sticky ? 'black' : 'white',
      
            borderBottom: '4px solid black',
            backgroundColor: sticky ? 'white' : 'black',
            top: sticky ? 0 : 'auto',
            left: '50%',
            fontSize: '1em',
            height: '35px',
            minWidth: sticky ? '100%' : '30%',
            zIndex: 200,
            bottom: '63px', 
            maxWidth: '98%',
            transform: 'translateX(-50%)',


    })

    const propsSpring = useSpring({
        delay: 1000,
        immediate: false,
        config: {
            duration: 2000,
            delay: 2000,
        },
        from: {
            opacity: 0,
        }, to: {
            opacity: 1,
        }
    });

    function helloWorld () {
        console.log("Hello World");
    }


    function handleOnScroll (scrollY, offset){
        console.log("OFFSET");
        console.log(offset)
        if(scrollY + 40 >= offset) {
            if(sticky === 0) {
                setSticky(1);
            }
        } else {
            setSticky(0);
        }
    }


    useEffect(()=>{
        const offsetTopDefine = someRefName.current.offsetTop;
        offset = offsetTopDefine;
    }, []);

    useEffect(()=>{
        window.addEventListener("scroll", () => handleOnScroll(window.scrollY, offset), {capture: true, passive: true});
        return () => {
            window.removeEventListener("scroll", handleOnScroll);
        }
    },[]);

    const subMenuClass1 = "d-flex flex-row justify-content-center align-items-center rounded submenu";
    const subMenuClass2 = "d-flex flex-row justify-content-center align-items-center rounded submenu-sticky";


    return(
            <>

            <animated.div style={propsSpring2} className={subMenuClass1} ref={someRefName}>
                <SubMenuDom/>
            </animated.div>
           
        </>
    );
}

export default SubMenu;