import {GET_FEATURED_PRODUCT} from "../types";

const initialState = {}

export const featuredProductReducer = (state = initialState, action)=>{
    switch (action.type){
        case GET_FEATURED_PRODUCT:
            return action.payload
        default:
            return state
    }
}
