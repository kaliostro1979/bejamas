import {ADD_TO_CART} from "../types";
import {getMiniCartProducts} from "./getMiniCartProducts";



export const addToCart = (product)=>{
    let cardItems = []
    return function (dispatch){
        const cardItemsFromLocal = JSON.parse(localStorage.getItem('cardItems'))

        if (!cardItemsFromLocal || !cardItemsFromLocal.length){
            cardItems.push(product)
            localStorage.setItem('cardItems', JSON.stringify(cardItems))
        }else {
            cardItemsFromLocal.forEach(item=>{
                if (item.slug !== product.slug){
                    cardItemsFromLocal.push(product)
                }
            })
            localStorage.setItem('cardItems', JSON.stringify(cardItemsFromLocal))
        }
        dispatch(addToCartAction())
        dispatch(getMiniCartProducts())
    }
}

const addToCartAction = ()=>{
    return {
        type: ADD_TO_CART
    }
}
