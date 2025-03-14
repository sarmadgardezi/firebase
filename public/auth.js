// Import Firebase modules
import { auth, db } from "./firebase-config.js";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    sendEmailVerification 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
    doc, setDoc, getDoc, getDocs, collection, serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ✅ SIGNUP FUNCTION (with Email Verification)
document.getElementById("signup-form")?.addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const signupError = document.getElementById("signup-error");

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // ✅ Send Email Verification
        await sendEmailVerification(user);
        alert("Verification email sent! Please check your inbox and verify before logging in.");

        // ✅ Save user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: user.email,
            createdAt: serverTimestamp(),
            emailVerified: false // Initially false until user verifies
        });

        window.location.href = "index.html"; // Redirect to login page
    } catch (error) {
        console.error("Signup error:", error);
        signupError.textContent = error.message;
    }
});

// ✅ LOGIN FUNCTION (Check Email Verification)
document.getElementById("login-form")?.addEventListener("submit", async function (e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const loginError = document.getElementById("login-error");

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // ✅ Refresh user data to get updated verification status
        await user.reload();

        // ✅ Check if email is verified
        if (!user.emailVerified) {
            alert("Please verify your email before logging in.");
            return;
        }

        console.log("User logged in:", user);
        window.location.href = "dashboard.html";
    } catch (error) {
        console.error("Login error:", error);
        loginError.textContent = error.message;
    }
});

// ✅ LOGOUT FUNCTION
document.getElementById("logout-button")?.addEventListener("click", async function () {
    try {
        await signOut(auth);
        console.log("User logged out");
        window.location.href = "index.html";
    } catch (error) {
        console.error("Logout error:", error);
    }
});
