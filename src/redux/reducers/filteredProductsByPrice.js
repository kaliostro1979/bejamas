import {FILTER_BY_PRICE} from "../types";

const initialState = []

export const filteredProductsByPriceReducer = (state=initialState, action)=>{
    switch (action.type){
        case FILTER_BY_PRICE:
            return action.payload
        default:
            return state
    }
}
