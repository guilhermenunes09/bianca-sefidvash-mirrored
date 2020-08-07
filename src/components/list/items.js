import React from 'react';
import Ball from '../../imgs/item-ball-9-09.svg';

function Items (props) {
    return(
        <>
            <div style={{maxWidth: '300px'}} className="d-flex flex-row align-items-center justify-content-center">
                <div className="p-2 pb-1">
                    <img src={Ball} width={22} />
                </div>
                <div className="p-2">
                    {props.item}
                </div>
            </div>
        </>
    );
}

export default Items;