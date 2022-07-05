import React from 'react';

function Button({text, callBack, additionalClass, disabled}) {
    return (
        <button onClick={callBack} className={'button ' + additionalClass} disabled={disabled}>{text}</button>
    );
}

export default Button;
