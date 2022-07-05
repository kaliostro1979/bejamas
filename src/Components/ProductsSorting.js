import React from 'react';
import SortingIcon from "./Icons/SortingIcon";
import {getProducts} from "../redux/actions/getProducts";
import {useDispatch, useSelector} from "react-redux";
import {getFilteredByCategoryProducts} from "../redux/actions/getFilteredByCategoryProducts";

function ProductsSorting(props) {
    const dispatch = useDispatch()
    const selectedFilters = useSelector(state => state.selected_filters)
    const handleSorting = (e) => {
        const selectedValue = e.target.value

        dispatch(getProducts(selectedValue))
        dispatch(getFilteredByCategoryProducts(selectedFilters, selectedValue))
    }

    return (
        <div className={'products-sorting__wrapper'}>
            <div className={'products-sorting__inner'}>
                <label htmlFor={'products-sorting'}>Sort By</label>
                <div className={'products-sorting__icon'}>
                    <SortingIcon/>
                </div>
                <select name="sorting" id="products-sorting" onChange={(e) => handleSorting(e)}>
                    <option value="name/asc">Name ascending</option>
                    <option value="name/desc">Name descending</option>
                    <option value="price/asc">Price ascending</option>
                    <option value="price/desc">Price descending</option>
                </select>
            </div>
        </div>
    );
}

export default ProductsSorting;
