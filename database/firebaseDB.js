import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAEpwZvRBXEC7DA7D4ooKt8uiTu_dfZ6Tg",
    authDomain: "",
    databaseURL: "",
    projectId: "waystodo-a5284",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
