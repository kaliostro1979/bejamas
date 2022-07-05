import {GET_CATEGORIES} from "../types";

const initialState = []

export const getCategoriesReducer = (state=initialState, action)=>{
    switch (action.type){
        case GET_CATEGORIES:
            return action.payload
        default:
            return state
    }
}
