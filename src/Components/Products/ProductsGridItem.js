import React from 'react';
import {Link} from "react-router-dom";
import Image from "../Image";
import Button from "../Button";
import {addToCart} from "../../redux/actions/addToCart";
import {openShoppingCardStatus} from "../../redux/actions/manageCartState";
import {useDispatch} from "react-redux";

function ProductsGridItem({product}) {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(product))
        dispatch(openShoppingCardStatus())
    }

    return (
        <>
            <div className={'products-grid__item-image'}>
                <Image src={product.image.src} alt={product.image.alt} paddingTop={'400px'}/>
                <Button text={'add to cart'} additionalClass={'button-primary products-grid__item-button'} callBack={handleAddToCart}/>
            </div>
            <Link to={product.slug}>
                <div className={'products-grid__item-meta'}>
                    <p className={'products-grid__item-category'}>{product.category}</p>
                    <p className={'products-grid__item-title'}>{product.name}</p>
                    <p className={'products-grid__item-price'}>$ {product.price.toFixed(2)}</p>
                </div>
            </Link>
        </>
    );
}

export default ProductsGridItem;
