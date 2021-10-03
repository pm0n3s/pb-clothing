// import firebase from 'firebase/compat/app'
// import 'firebase/compat/firestore'
// import 'firebase/compat/auth'


// const firebaseConfig = {
//   apiKey: "AIzaSyCuXSkSYqaHoa6u0y9MC0VC_Hykxzj38vA",
//   authDomain: "pb-clothing-7cd58.firebaseapp.com",
//   projectId: "pb-clothing-7cd58",
//   storageBucket: "pb-clothing-7cd58.appspot.com",
//   messagingSenderId: "45344365293",
//   appId: "1:45344365293:web:92acb9aa4c0f1fb7b6cae4",
//   measurementId: "G-BMNNFYQGWM"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider()
// provider.setCustomParameters({ 'prompt': 'select_account '})

// export const signInWithGoogle = () => auth.signInWithPopup(provider)

// export default firebase

import { initializeApp } from 'firebase/app'
// onAuthStateChanged
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// collection, query, where, getDocs 
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCuXSkSYqaHoa6u0y9MC0VC_Hykxzj38vA",
    authDomain: "pb-clothing-7cd58.firebaseapp.com",
    projectId: "pb-clothing-7cd58",
    storageBucket: "pb-clothing-7cd58.appspot.com",
    messagingSenderId: "45344365293",
    appId: "1:45344365293:web:92acb9aa4c0f1fb7b6cae4",
    measurementId: "G-BMNNFYQGWM"
  };

const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)
export const firestore = getFirestore(firebaseApp)

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account '})

export const signInWithGoogle = () => signInWithPopup(auth, provider)
