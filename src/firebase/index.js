import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2vVx4QkLgdNz8uzWbKvEmgbuCvNz-Qb8",
    authDomain: "recycling-938ad.firebaseapp.com",
    projectId: "recycling-938ad",
    storageBucket: "recycling-938ad.appspot.com",
    messagingSenderId: "276165414551",
    appId: "1:276165414551:web:e566c5d2d7592f3130a3d2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}