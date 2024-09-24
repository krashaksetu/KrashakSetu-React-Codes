// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjSLej_IkAraHczh3ZWHHlb5KTYa0sMQE",
    authDomain: "reacttesting-2b7fd.firebaseapp.com",
    databaseURL: "https://reacttesting-2b7fd-default-rtdb.firebaseio.com/",
    projectId: "reacttesting-2b7fd",
    storageBucket: "reacttesting-2b7fd.appspot.com",
    messagingSenderId: "1077093311867",
    appId: "1:1077093311867:web:35d2b1a07de9e0ffed09de",
    measurementId: "G-QVGHDXDV9B"
};

// Initialize Firebase only once
let app;
try {
    app = initializeApp(firebaseConfig);
} catch (error) {
    if (error.code === 'app/duplicate-app') {
        console.log('Firebase app already initialized');
    } else {
        console.error('Firebase initialization error:', error);
    }
}

const db = getDatabase(app); // Get the database instance

export { db }; // Export the db instance
