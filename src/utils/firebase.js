import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyD-Xye6idKvSuqx8junbQ4OusQuWXswE-4",
    authDomain: "bejamas-e652b.firebaseapp.com",
    projectId: "bejamas-e652b",
    storageBucket: "bejamas-e652b.appspot.com",
    messagingSenderId: "228244773353",
    appId: "1:228244773353:web:cdbec47b33995344a35378"
};


const app = initializeApp(config)
export const db = getFirestore(app);



