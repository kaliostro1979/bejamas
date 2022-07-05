import React from 'react';
import Breadcrumbs from "../Breadcrumbs";
import ProductsSorting from "../ProductsSorting";

function ProductsGridHeader() {

    return (
        <div className={'products-grid__header'}>
            <div className={'breadcrumbs'}>
                <Breadcrumbs/>
            </div>
            <div className={'products-sorting'}>
                <ProductsSorting/>
            </div>
        </div>
    );
}

export default ProductsGridHeader;
