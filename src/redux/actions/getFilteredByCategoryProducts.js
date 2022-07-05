import {FILTER_BY_CATEGORY, FILTER_BY_PRICE} from "../types";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../utils/firebase";

const collectionName = "products"

export const getFilteredByCategoryProducts = (categories) => {

    return async function (dispatch) {
        if (categories.length) {
            const q1 = query(
                collection(db, collectionName),
                where('category', 'in', categories)
            );
            const querySnapshot = await getDocs(q1);
            const filteredProducts = querySnapshot.docs.map(doc => {
                return doc.data()
            })

            dispatch(getFilteredByCategoryProductsAction(filteredProducts))
        } else {
            dispatch(getFilteredByCategoryProductsAction([]))
        }
    }
}

export const getFilteredByPriceProducts = (min, max) => {
    let q2 = null

    return async function (dispatch) {
        if (!max) {
            q2 = query(
                collection(db, collectionName),
                where('price', '>=', min ? min : 0)
            );
        }

        q2 = query(
            collection(db, collectionName),
            where('price', '<', max),
            where('price', '>=', min ? min : 0)
        );

        const querySnapshot = await getDocs(q2);
        const filteredProducts = querySnapshot.docs.map(doc => {
            return doc.data()
        })

        dispatch(getFilteredByPriceProductsAction(filteredProducts))
    }
}

const getFilteredByCategoryProductsAction = (products) => {
    return {
        type: FILTER_BY_CATEGORY,
        payload: products
    }
}

const getFilteredByPriceProductsAction = (products) => {

    return {
        type: FILTER_BY_PRICE,
        payload: products
    }
}
