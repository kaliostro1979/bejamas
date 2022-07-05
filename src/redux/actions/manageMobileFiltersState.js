import {OPEN_MOBILE_FILTERS, CLOSE_MOBILE_FILTERS} from "../types";

export const openMobileFiltersStatus = () => {
    return {
        type: OPEN_MOBILE_FILTERS
    }
}

export const closeMobileFiltersStatus = () => {
    return {
        type: CLOSE_MOBILE_FILTERS
    }
}
