import {GET_SINGLE_PRODUCT} from "../types";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../utils/firebase";

export const getSingleProduct = (id)=>{
    return async function (dispatch){
        const docRef = doc(db, 'products', id)
        const product = await getDoc(docRef).then((doc)=>doc.data())
        console.log(product);
        dispatch(getSingleProductAction(product))
    }
}

const getSingleProductAction = (product)=>{
    return {
        type: GET_SINGLE_PRODUCT,
        payload: product
    }
}
