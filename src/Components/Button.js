import React from 'react';

function Button({text, callBack, additionalClass}) {
    return (
        <button onClick={callBack} className={'button ' + additionalClass}>{text}</button>
    );
}

export default Button;
