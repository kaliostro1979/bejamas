import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getSingleProduct} from "../redux/actions/getSingleProduct";

function Product(props) {
    const params = useParams()
    const product = useSelector(state => state.single_product)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getSingleProduct(params.slug))
    },[params.slug, dispatch])

    return (
        <div>
            <img src={product.image.src} alt=""/>
            {product.name}
        </div>
    );
}

export default Product;
