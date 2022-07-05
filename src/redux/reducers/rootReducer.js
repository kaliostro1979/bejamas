import {combineReducers} from "redux";
import {getProductsReducer} from "./products";
import {getCategoriesReducer} from "./categories";
import {singleProductReducer} from "./singleProduct";
import {featuredProductReducer} from "./featuredProduct";
import {cartReducer} from "./cart";
import {miniCartStateCardReducer} from "./cartState";
import {filteredProductsByCategoryReducer} from "./filteredProductsByCategory";
import {selectedFiltersReducer} from "./selectedFilters";
import {filteredProductsByPriceReducer} from "./filteredProductsByPrice";
import {mobileFiltersStateReducer} from "./mobileFiltersState";



export const allReducers = combineReducers({
    products: getProductsReducer,
    categories: getCategoriesReducer,
    single_product: singleProductReducer,
    featured_product: featuredProductReducer,
    cart: cartReducer,
    cart_state: miniCartStateCardReducer,
    filtered_products_by_category: filteredProductsByCategoryReducer,
    filtered_products_by_price: filteredProductsByPriceReducer,
    selected_filters: selectedFiltersReducer,
    mobile_filters_state: mobileFiltersStateReducer
})

