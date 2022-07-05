import {GET_PRODUCTS} from "../types";

const initialState = []

export const getProductsReducer = (state=initialState, action)=>{
    switch (action.type){
        case GET_PRODUCTS:
            return action.payload
        default:
            return state
    }
}
