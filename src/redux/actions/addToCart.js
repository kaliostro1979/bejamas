import {ADD_TO_CART} from "../types";
import {getMiniCartProducts} from "./getMiniCartProducts";



export const addToCart = (product, id)=>{
    let cardItems = []
    return function (dispatch){
        const cardItemsFromLocal = JSON.parse(localStorage.getItem('cardItems'))

        if (!cardItemsFromLocal || !cardItemsFromLocal.length){
            cardItems.push({...product, id:id})
            localStorage.setItem('cardItems', JSON.stringify(cardItems))
        }else {
            var isInArray = cardItemsFromLocal.find(function(el){ return el.id === id }) !== undefined;
            if (!isInArray){
                cardItemsFromLocal.push({...product, id:id})
            }

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
