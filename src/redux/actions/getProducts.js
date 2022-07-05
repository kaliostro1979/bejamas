import {GET_PRODUCTS} from "../types";
import {collection, query, orderBy, getDocs} from "firebase/firestore";
import {db} from "../../utils/firebase";

const collectionName = "products"


export const getProducts = (data) => {
    const params = data.split('/')

    return async function (dispatch) {
        const first = query(collection(db, collectionName), orderBy(params[0], params[1]));
        const documentSnapshots = await getDocs(first);
        let productList = documentSnapshots.docs.map(doc => {
            return {
                id: doc.id,
                item: doc.data()
            }
        })

        dispatch(getProductsAction(productList))
    }
}

export const getProductsAction = (products) => {
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}
