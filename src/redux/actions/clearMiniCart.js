import {CLEAR_MINI_CART} from "../types";
import {getMiniCartProducts} from "./getMiniCartProducts";

export const clearMiniCart = () => {
    return function (dispatch) {
        localStorage.setItem('cardItems', JSON.stringify([]))
        dispatch(clearMiniCartAction())
        dispatch(getMiniCartProducts())
    }
}

const clearMiniCartAction = () => {
    return {
        type: CLEAR_MINI_CART
    }
}
