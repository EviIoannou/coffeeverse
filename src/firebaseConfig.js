// src/firebaseConfig.js
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCfQCcmKgv5Z9SEV6liMTfZlPc7Ah1Kkrs",
    authDomain: "coffeeverse-by-evi.firebaseapp.com",
    projectId: "coffeeverse-by-evi",
    storageBucket: "coffeeverse-by-evi.appspot.com",
    messagingSenderId: "353365727885",
    appId: "1:353365727885:web:17198dfc2c7cd7fb1320c4"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);