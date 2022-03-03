import React from 'react';
import './ZoomImage.css'

const ZoomImage = ({image, left, top, overflow}) => {
    return (
        <div className="zoomimage" style={overflow ? {backgroundImage: `url(${image})`, backgroundPosition: `${-left}px ${-top+100}px`,display: "none"} : {backgroundImage: `url(${image})`, backgroundPosition: `${-left}px ${-top+200}px`}}>
            
        </div>
    )
}

export default ZoomImage
