import React from 'react';
import './mainText.css';

function MainText (props) {


    return(
        <React.Fragment>
            <div className="align-middle padding-text">
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