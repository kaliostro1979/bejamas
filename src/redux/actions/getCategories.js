import {GET_CATEGORIES} from "../types";
import {collection, getDocs} from "firebase/firestore/lite";
import {db} from "../../utils/firebase";

export const getCategories = () => {
    return async function (dispatch) {
        const categoriesCol = collection(db, 'categories');
        const categoriesSnapshot = await getDocs(categoriesCol);
        const categoriesList = categoriesSnapshot.docs.map(doc => doc.data())
        dispatch(getCategoriesAction(categoriesList))
    }
}


const getCategoriesAction = (products) => {

    return {
        type: GET_CATEGORIES,
        payload: products
    }
}
