import React from 'react';

function TextWithTitle({title, text, category}) {
    return (
        <div className={'text-block__information'}>
            <div className={'text-block__title'}>
                <p>{title ? title : ""}</p>
            </div>
            <div className={'text-block__subtitle'}>
                <p>{category ? category : ""}</p>
            </div>
            <div className={'text-block__content'}>
                <p>{text ? text : ""}</p>
            </div>
        </div>
    );
}

export default TextWithTitle;
