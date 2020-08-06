import React from 'react';
import ImageSwiper from './swiper/imageSwiper.js';
import imgInteriores1 from '../interiores/img/interiores-1.jpg';
import imgInteriores2 from '../interiores/img/interiores-2.png';
import imgInteriores3 from '../interiores/img/interiores-3.jpg';
import imgPlanejados1 from '../planejados/img/planejados-1.jpg';
import imgPlanejados2 from '../planejados/img/planejados-2.jpg';
import imgPlanejados3 from '../planejados/img/planejados-3.jpg';

const photos = [
    {src:imgInteriores1,
    width:200,
    height:180,},
    {src:imgInteriores2,
    width:300,
    height:170,},
    {src:imgInteriores3,
    width:120,
    height:80,},

    {src:imgPlanejados1,
        width:320,
        height:240,},
    {src:imgPlanejados2,
        width:117,
        height:78,},
    {src:imgPlanejados3,
        width:326,
        height:244,},
]

function Gallery() {
    return <ImageSwiper photos={photos} />
}

export default Gallery;