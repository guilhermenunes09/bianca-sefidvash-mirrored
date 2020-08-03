import React from 'react';

function Title (props) {
    return(
        <>
            <h1><span name={props.name}>{props.title}</span></h1>
        </>
    );
}

export default Title;