import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCYPO84zL18gOy7pQgejkV0Qy8UBah4fr0",
    authDomain: "busy-buy-cca61.firebaseapp.com",
    projectId: "busy-buy-cca61",
    storageBucket: "busy-buy-cca61.appspot.com",
    messagingSenderId: "901744115452",
    appId: "1:901744115452:web:e815729a200d99cd016179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
