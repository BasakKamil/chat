import React, { useState } from 'react';
import ThreeBack from './Threeback';

const Backg = () => {
    const [width,setWidth] = useState('');
    const [height,setHeight] = useState('');
    window.onchange = function () {
        const width = window.innerWidth;
        setWidth(width);
        const height = window.innerHeight;
        setHeight(height);
    }

  
    return (
        <div className="Podklad" style={{width: width, height: height}}> <ThreeBack/> </div>
        
    )
}

export default Backg