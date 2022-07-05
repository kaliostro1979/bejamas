import React from 'react';
import CategoriesList from "../Categories/CategoriesList";
import {useDispatch, useSelector} from "react-redux";
import CloseIcon from "../Icons/CloseIcon";
import Button from "../Button";
import {closeMobileFiltersStatus} from "../../redux/actions/manageMobileFiltersState";

function FiltersMobile(props) {
    const priceRange = [
        {
            name: "Lower than $20",
            min: 0,
            max: 20
        },
        {
            name: "$20 - $100",
            min: 20,
            max: 100
        },
        {
            name: "$100 - $200",
            min: 100,
            max: 200
        },
        {
            name: "More than $200",
            min: 200,
            max: null
        }
    ]
    const categories = useSelector(state => state.categories)
    const mobileFiltersState = useSelector(state => state.mobile_filters_state)
    const filtered_products_by_category = useSelector(state => state.filtered_products_by_category)
    const filtered_products_by_price = useSelector(state => state.filtered_products_by_price)
    const dispatch = useDispatch()

    return (
        <div className={mobileFiltersState.open ? 'filters-mobile show' : 'filters-mobile'}>
            <div className={'filters-mobile__wrapper'}>
                <div className={'filters-mobile__header'}>
                    <div className={'filters-mobile__close'} onClick={()=>dispatch(closeMobileFiltersStatus())}>
                        <CloseIcon/>
                    </div>
                </div>
                <div className={'filters-mobile__inner'}>
                    <CategoriesList items={categories} title={'Categories'} name={'category'} idPostfix={'mobile'}/>
                    <CategoriesList items={priceRange} title={'Price'} name={'price'} idPostfix={'mobile'}/>
                </div>
                <div className={'filters-mobile__footer'}>
                    <Button
                        text={'clear'}
                        additionalClass={'button-secondary mobile-filters__button'}
                        />
                    <Button
                        text={'save'}
                        additionalClass={'button-primary mobile-filters__button'}
                        callBack={()=>dispatch(closeMobileFiltersStatus())}
                        disabled={!filtered_products_by_category.length && !filtered_products_by_price.length}
                    />
                </div>
            </div>
        </div>
    );
}

export default FiltersMobile;
