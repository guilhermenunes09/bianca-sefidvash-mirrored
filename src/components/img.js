import React, {Suspense} from 'react';
import {useImage} from 'react-image';

function ImgWrapped (props) {

    let classStyle="";
    if (props.nofluid === false && props.width == null) {
        classStyle = "img-effect img-fluid"
    } 
    console.log("style");
    console.log(classStyle);
    return(
        <>
            <img className={classStyle} width={props.width + "px"} src={props.image} alt={props.alt} />
        </>
    ); 
}


export function Img(props) {
    return (
      <Suspense>
        <ImgWrapped nofluid={props.nofluid || false} image={props.image} alt={props.alt} width={props.width} />
      </Suspense>
    )
  }

export default Img;