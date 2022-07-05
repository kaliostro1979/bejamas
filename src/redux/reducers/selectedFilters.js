import {SET_SELECTED_FILTERS} from "../types";

const initialState = []

export const selectedFiltersReducer = (state=initialState, action)=>{
    switch (action.type){
        case SET_SELECTED_FILTERS:
            return [...action.payload]
        default:
            return state
    }
}
