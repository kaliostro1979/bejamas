import React from 'react';
import Breadcrumbs from "../Breadcrumbs";
import ProductsSorting from "../ProductsSorting";
import SortingMobileIcon from "../Icons/SortingMobileIcon";
import {openMobileFiltersStatus} from "../../redux/actions/manageMobileFiltersState";
import {useDispatch} from "react-redux";

function ProductsGridHeader() {
    const dispatch = useDispatch()
    return (
        <div className={'products-grid__header'}>
            <div className={'breadcrumbs'}>
                <Breadcrumbs/>
            </div>
            <div className={'products-sorting'}>
                <ProductsSorting/>
            </div>
            <div className={'products-filters__icon'} onClick={()=>dispatch(openMobileFiltersStatus())}>
                <SortingMobileIcon/>
            </div>
        </div>
    );
}

export default ProductsGridHeader;
