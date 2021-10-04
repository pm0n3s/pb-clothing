import { initializeApp } from 'firebase/app'
// onAuthStateChanged
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
// collection, query, where
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCuXSkSYqaHoa6u0y9MC0VC_Hykxzj38vA",
    authDomain: "pb-clothing-7cd58.firebaseapp.com",
    projectId: "pb-clothing-7cd58",
    storageBucket: "pb-clothing-7cd58.appspot.com",
    messagingSenderId: "45344365293",
    appId: "1:45344365293:web:92acb9aa4c0f1fb7b6cae4",
    measurementId: "G-BMNNFYQGWM"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = await getDoc(doc(firestore, 'users', userAuth.uid))
    if(!userRef.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(doc(firestore, 'users', userAuth.uid), {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err){
            console.log('error creating user', err.message)
        }  
    }

    return userRef
}

const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)
export const firestore = getFirestore(firebaseApp)
export const createUser = createUserWithEmailAndPassword
export const signIn = signInWithEmailAndPassword
export const signOutUser = signOut

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account '})

export const signInWithGoogle = async () => {
    try{
        await signInWithPopup(auth, provider)
    } catch (err) {
        console.log(err)
    }    
}