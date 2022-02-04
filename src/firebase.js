import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider , signInWithPopup  } from 'firebase/auth'
//import { getFirestore } from "firebase/firestore";
import {getFirestore} from "@firebase/firestore"
// const firebaseApp = initializeApp({
//   apiKey: '### FIREBASE API KEY ###',
//   authDomain: '### FIREBASE AUTH DOMAIN ###',
//   projectId: '### CLOUD FIRESTORE PROJECT ID ###'
// });


const firebaseConfig = {
  apiKey: "AIzaSyB6u1EHCed1rGg63zVsxJsApZesuJhkyIo",
  authDomain: "log-auth-3f69c.firebaseapp.com",
  projectId: "log-auth-3f69c",
  storageBucket: "log-auth-3f69c.appspot.com",
  messagingSenderId: "276067843812",
  appId: "1:276067843812:web:f0ff37f84f95501258f6f1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const sighInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result)=>{
        const name=result.user.displayName;
        const email=result.user.email;
        const profilePic=result.user.photoURL;
        console.log(result);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("profilePic",profilePic);
        
    }).catch((error)=>{
        console.log(error);
    })
};