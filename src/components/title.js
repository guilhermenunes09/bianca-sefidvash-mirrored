import React from 'react';
import Fade from 'react-reveal/Fade';


function Title (props) {
    return(
        <>
            <Fade duration={2000}>
                <h1><span name={props.name}>{props.title}</span></h1>
            </Fade>
  
        </>
    );
}

export default Title;