import {GET_SINGLE_PRODUCT} from "../types";

const initialState = {}

export const singleProductReducer = (state=initialState, action)=>{
    switch (action.type){
        case GET_SINGLE_PRODUCT:
            return action.payload
        default:
            return state
    }
}
