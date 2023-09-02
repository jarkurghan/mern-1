import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCgsqSPwKMi4AhDkEU8CQuQh321ECP5OFg",
    authDomain: "mern-sammi-1.firebaseapp.com",
    projectId: "mern-sammi-1",
    storageBucket: "mern-sammi-1.appspot.com",
    messagingSenderId: "786811767869",
    appId: "1:786811767869:web:9e98793bdde65d6c76ae54",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
