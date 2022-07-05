import {CLOSE_MINI_CARD, OPEN_MINI_CARD} from "../types";

const initialState = {
    open: false
}

export const miniCartStateCardReducer = (state = initialState, action) => {

    switch (action.type) {
        case OPEN_MINI_CARD:
            return {...state, open: true}
        case CLOSE_MINI_CARD:
            return {...state, open: false}
        default:
            return state
    }
}
