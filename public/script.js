import { auth } from "./firebase-config.js";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Signup
document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;
            
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                alert("Signup successful! Redirecting to login...");
                window.location.href = "login.html";
            } catch (error) {
                alert(error.message);
            }
        });
    }

    // Login
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            try {
                await signInWithEmailAndPassword(auth, email, password);
                alert("Login successful! Redirecting to dashboard...");
                window.location.href = "dashboard.html";
            } catch (error) {
                alert(error.message);
            }
        });
    }

    // Logout
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
            await signOut(auth);
            alert("Logged out successfully!");
            window.location.href = "login.html";
        });
    }

    // Auth State Change (Protect Dashboard)
    onAuthStateChanged(auth, (user) => {
        if (document.location.pathname.includes("dashboard.html") && !user) {
            alert("You must be logged in to access this page.");
            window.location.href = "login.html";
        }
    });
});
