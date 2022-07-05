import React from 'react';
import Image from "./Image";

function RelatedProducts({products}) {
    return(
        <div className={'related-products'}>
            <div className={'related-products__title'}>
                <p>People also buy</p>
            </div>
            <div className={' related-products__items'}>
                {
                    products.length ? products.map((prod, i)=>{
                        return (
                            <div className={'related-products__item'} key={i}>
                                <Image src={prod.src} alt={prod.alt} paddingTop={'147px'}/>
                            </div>
                        )
                    }) : null
                }
            </div>
        </div>
    )
}

export default RelatedProducts;
