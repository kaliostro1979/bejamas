import React from 'react';
import Button from "./Button";


function Pagination() {
    return (
        <div className={'pagination-wrapper'}>
            <ul className={'pagination-list'}>
                <li className={'pagination-list__item'}><Button text={'Load more'} additionalClass={'button-secondary'}/></li>
            </ul>
        </div>
    );
}

export default Pagination;
