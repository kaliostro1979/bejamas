import React from 'react';
import {
    getFilteredByCategoryProducts,
    getFilteredByPriceProducts
} from "../../redux/actions/getFilteredByCategoryProducts";
import {useDispatch} from "react-redux";
import {setSelectedFiltersAction} from "../../redux/actions/setSelectedFiltersAction";
let selectedFilters = []
function CategoriesItem({text, min, max, name, idPostfix}) {
    const dispatch = useDispatch()

    const handleInputValue = (e) => {
        const selectedCategory = e.target.value

        if (e.target.name === 'category') {
            if (e.target.checked && !min && !max) {
                selectedFilters.push(selectedCategory)
            } else {
                selectedFilters = selectedFilters.filter((elem) => elem !== selectedCategory)
            }

            dispatch(getFilteredByCategoryProducts(selectedFilters))
            dispatch(setSelectedFiltersAction(selectedFilters))
        }

        if (e.target.name === 'price') {

            if (min || max) {
                dispatch(getFilteredByPriceProducts(min, max))
            }
        }
    }

    return (
        <div className={'categories-list__item-wrapper'}>
            <input
                type={name === 'price' || name === 'price-mobile' ? "radio" : "checkbox"}
                name={name}
                id={text + '-' + idPostfix}
                className={'categories-list__item-checkbox'}
                value={text}
                onChange={(e) => handleInputValue(e)}
                min={min}
                max={max}
            />
            <label htmlFor={text + '-' + idPostfix} className={'categories-list__item-label'}>{text}</label>
        </div>
    );
}

export default CategoriesItem;
