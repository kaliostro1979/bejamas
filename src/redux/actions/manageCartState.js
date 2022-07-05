import {CLOSE_MINI_CARD, OPEN_MINI_CARD} from "../types";

export const openShoppingCardStatus = () => {
    return {
        type: OPEN_MINI_CARD
    }
}

export const closeShoppingCardStatus = () => {
    return {
        type: CLOSE_MINI_CARD
    }
}
