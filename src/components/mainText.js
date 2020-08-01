import React from 'react';
import './mainText.css';

function MainText (props) {


    return(
        <React.Fragment>
            <div className="align-middle padding-text">
                <h1>{props.title}</h1>
                {props.text && props.text.map(function(item, i) {
                    return (
                        <p key={i}>{item}</p>
                    );
                    })}
            </div>
        </React.Fragment>
    );
}

export default MainText;