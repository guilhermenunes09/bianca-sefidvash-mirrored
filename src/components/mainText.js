import React, { useState, useEffect } from 'react';
import './mainText.css';

function MainText (props) {

    const [myText, setMyText] = useState([]);

    useEffect(() => {
        console.log(props.text)
    });

    return(
        <React.Fragment>
            <div className="align-middle padding-text">
                <h1>{props.title}</h1>
                {props.text && props.text.map(function(item, i) {
                    return (
                        <p>{item}</p>
                    );
                    })}
            </div>
        </React.Fragment>
    );
}

export default MainText;