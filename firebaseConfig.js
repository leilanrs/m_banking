import { initializeApp } from 'firebase/app';
import { getAuth, 
    initializeAuth, 
    getReactNativePersistence, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB9cSyJN0JvrFf9cu60Sol-u0cyTXv0xZM",
    authDomain: "odpbni-6e218.firebaseapp.com",
    projectId: "odpbni-6e218",
    storageBucket: "odpbni-6e218.appspot.com",
    messagingSenderId: "234941723872",
    appId: "1:234941723872:web:9ddd5f82b94d0e1ed10c85",
    measurementId: "G-88HK7S6C8J"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export { app, auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged }