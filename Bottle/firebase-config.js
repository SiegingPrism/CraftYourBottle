// firebase-config.js

// 1. IMPORT FIREBASE (Using CDN for browser usage without build step)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// 2. CONFIGURATION
const firebaseConfig = {
    apiKey: "AIzaSyCcYAJQiZGcL5qBN1-IzlCgq1JvjNh9Hk4",
    authDomain: "bottlecraft-eb37e.firebaseapp.com",
    projectId: "bottlecraft-eb37e",
    storageBucket: "bottlecraft-eb37e.firebasestorage.app",
    messagingSenderId: "852201679938",
    appId: "1:852201679938:web:97132055766510258b91db",
    measurementId: "G-ETBHBVM1WK"
};

// 3. INITIALIZE
let app, auth, db, analytics;
let isConfigured = false;

try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    analytics = getAnalytics(app);
    isConfigured = true;
    console.log("🔥 Firebase initialized successfully.");
} catch (e) {
    console.error("Firebase init error:", e);
}

export { auth, db, analytics, isConfigured, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, collection, getDocs, doc, getDoc, addDoc, updateDoc };
