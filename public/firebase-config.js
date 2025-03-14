// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0HaZ8sCCLAgVaLouQoHygjzleMX60o-s",
  authDomain: "test-pj-51c3d.firebaseapp.com",
  projectId: "test-pj-51c3d",
  storageBucket: "test-pj-51c3d.appspot.com",
  messagingSenderId: "520194841599",
  appId: "1:520194841599:web:962b91bee34847641165ca"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Debugging Logs
console.log("Firebase Initialized:", app);
console.log("Auth Instance:", auth);
console.log("Firestore Instance:", db);

// ✅ Exporting auth & db
export { auth, db };