import React from 'react';
import Label from "./Label";

function Image({src, alt, paddingTop, label, labelText, additionalClass}) {
    return (
        <div className={additionalClass ? 'image-wrapper ' + additionalClass : 'image-wrapper '} style={{paddingTop: paddingTop}}>
            {
                label ? <Label text={labelText}/> : ''
            }
            <img src={src} alt={alt}/>
        </div>
    );
}

export default Image;
