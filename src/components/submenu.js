import React from 'react';
import "./submenu.css";
import { Link as LinkSame, scroller, Events } from 'react-scroll'
import { useSpring, animated, config } from 'react-spring';


function SubMenu () {

    const props = useSpring({
        delay: 1000,
        config: {
            duration: 2000,
            delay: 2000,
        },
        from: {
            opacity: 0,
        }, to: {
            opacity: 1,
        }
    })

    return(
        <animated.div style={props} className="submenu d-flex flex-row justify-content-center align-items-center rounded">
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
        </animated.div>
    );
}

export default SubMenu;