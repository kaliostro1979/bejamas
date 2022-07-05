import {GET_MINI_CART_PRODUCTS} from "../types";

export const getMiniCartProducts = ()=>{
    return async function (dispatch){
        const productList = JSON.parse(localStorage.getItem('cardItems'))

        dispatch(getMiniCartProductsAction(productList))
    }
}

const getMiniCartProductsAction = (products)=>{
    return {
        type: GET_MINI_CART_PRODUCTS,
        payload: products
    }
}
