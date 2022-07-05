import {FILTER_BY_CATEGORY} from "../types";

const initialState = []

export const filteredProductsByCategoryReducer = (state=initialState, action)=>{
    switch (action.type){
        case FILTER_BY_CATEGORY:
            return action.payload
        default:
            return state
    }
}
