import React from 'react';
import CategoriesItem from "./CategoriesItem";


function CategoriesList({items, title}) {

    return (
        <div className={'categories-list_wrapper'}>
            <h4 className={'categories-list__title'}>{title}</h4>
            <ul>
                {
                    items.length ? items.map((category, i)=>{
                        return (
                            <li key={i} className={'categories-list__item'}>
                                <CategoriesItem
                                    text={category.name}
                                    min={category.min}
                                    max={category.max}
                                    items={items}
                                />
                            </li>
                        )
                    }) : ""
                }
            </ul>
        </div>
    );
}

export default CategoriesList;
