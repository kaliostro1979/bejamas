import {OPEN_MOBILE_FILTERS, CLOSE_MOBILE_FILTERS} from "../types";

const initialState = {
    open: false
}

export const mobileFiltersStateReducer = (state = initialState, action) => {

    switch (action.type) {
        case OPEN_MOBILE_FILTERS:
            return {...state, open: true}
        case CLOSE_MOBILE_FILTERS:
            return {...state, open: false}
        default:
            return state
    }
}
