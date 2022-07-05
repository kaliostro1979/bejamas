import React from 'react';
import Image from "../Image";

function MiniCartItem({product}) {
    return (
        <div className={'mini-cart__item-wrapper'}>
            <div className={'mini-cart__item-info'}>
                <p className={'mini-cart__item-title'}>{product.name}</p>
                <p className={'mini-cart__item-price'}>$ {product.price.toFixed(2)}</p>
            </div>
            <div className={'mini-cart__item-image'}>
                <Image src={product.image.src} alt={product.image.alt} paddingTop={'86px'}/>
            </div>
        </div>
    );
}

export default MiniCartItem;
