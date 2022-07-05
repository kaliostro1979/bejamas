import {SET_SELECTED_FILTERS} from "../types";

export const setSelectedFiltersAction = (filters) =>{
    return {
        type: SET_SELECTED_FILTERS,
        payload: filters
    }
}
