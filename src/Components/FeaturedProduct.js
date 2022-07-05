import React from 'react';
import Image from "./Image";
import Button from "./Button";
import TextWithTitle from "./TextWithTitle";
import RelatedProducts from "./RelatedProducts";
import {useDispatch} from "react-redux";
import {addToCart} from "../redux/actions/addToCart";
import {openShoppingCardStatus} from "../redux/actions/manageCartState";

function FeaturedProduct({featured}) {
    const dispatch = useDispatch()

    const handleAddToCart = ()=>{
        dispatch(addToCart(featured))
        dispatch(openShoppingCardStatus())
    }


    return (
        <div className={'featured-product__wrapper'}>
            <div className={'featured-product__header'}>
                <h1 className={'featured-product__title'}>{featured.name}</h1>
                <Button text={'Add to cart'} additionalClass={'button-primary'} callBack={handleAddToCart}/>
            </div>
            <Image src={featured.image.src} alt={featured.image.alt ? featured.image.alt : ""} paddingTop={'550px'} label={featured.label.status} labelText={featured.label.text}/>
            <div className={'featured-product__details'}>
                <div className={'featured-product__details-item featured-product__details-item--left'}>
                    <TextWithTitle text={featured.details.description} title={featured.name} category={featured.category}/>
                </div>
                <div className={'featured-product__details-item featured-product__details-item--right'}>
                    <RelatedProducts products={featured.details.recommendations}/>
                    <div className={'featured-product__details-block'}>
                        <h3>Details</h3>
                        <p>Size: {featured.details.dimmentions.width} x {featured.details.dimmentions.height}</p>
                        <p>Size: {featured.details.size / 1000} mb</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProduct;
