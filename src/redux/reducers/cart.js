import {ADD_TO_CART, GET_MINI_CART_PRODUCTS} from "../types";

const initialState = null

export const cartReducer = (state = initialState, action)=>{
    switch (action.type){
        case ADD_TO_CART:
            return state
        case GET_MINI_CART_PRODUCTS:
            return action.payload
        default:
            return state
    }
}


