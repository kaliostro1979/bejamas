//db.collection('employees').where(`array`, '!=', null).get();

import {GET_FEATURED_PRODUCT} from "../types";
import {db} from "../../utils/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export const getFeaturedProduct = ()=>{
    let featured = {}
    return async function (dispatch){
        const q = query(collection(db, "products"), where("featured", "==", true));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            featured = doc.data()
        });

        dispatch(getFeaturedProductAction(featured))
    }
}

const getFeaturedProductAction = (prod)=>{
    return {
        type: GET_FEATURED_PRODUCT,
        payload: prod
    }
}
