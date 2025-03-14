import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged, signOut, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ✅ Wait for DOM to Load
document.addEventListener("DOMContentLoaded", () => {
    const userListDropdown = document.getElementById("user-list");
    const verificationMessage = document.getElementById("verification-message");
    const verifyButton = document.getElementById("verify-button");
    const logoutButton = document.getElementById("logout-button");

    // ✅ Load Users for Chat
    async function loadUsers() {
        try {
            const usersRef = collection(db, "users");
            const querySnapshot = await getDocs(usersRef);

            if (querySnapshot.empty) {
                console.log("No users found.");
                userListDropdown.innerHTML = "<option>No users found</option>";
                return;
            }

            userListDropdown.innerHTML = ""; // Clear previous users

            querySnapshot.forEach((doc) => {
                const userData = doc.data();
                if (auth.currentUser?.uid !== doc.id) { // Don't show logged-in user
                    let option = document.createElement("option");
                    option.value = doc.id;
                    option.textContent = userData.name || userData.email;
                    userListDropdown.appendChild(option);
                }
            });

            console.log("Users loaded successfully.");
        } catch (error) {
            console.error("Error loading users:", error);
        }
    }

    // ✅ Check Authentication & Load Data
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const userDoc = await getDoc(doc(db, "users", user.uid));

            if (userDoc.exists()) {
                const userData = userDoc.data();
                document.getElementById("user-name").textContent = `Name: ${userData.name}`;
                document.getElementById("user-email").textContent = `Email: ${user.email}`;
            }

            // ✅ Email Verification Check
            if (!user.emailVerified) {
                verificationMessage.textContent = "⚠️ Please verify your email!";
                verifyButton.style.display = "block";
            } else {
                verificationMessage.textContent = "✅ Email Verified";
                verifyButton.style.display = "none";
            }

            // ✅ Load Chat Users
            loadUsers();
        } else {
            window.location.href = "index.html"; // Redirect if not logged in
        }
    });

    // ✅ Send Verification Email
    verifyButton.addEventListener("click", async () => {
        if (auth.currentUser) {
            try {
                await sendEmailVerification(auth.currentUser);
                alert("Verification email sent! Check your inbox.");
            } catch (error) {
                console.error("Verification email error:", error);
            }
        }
    });

    // ✅ Logout Button
    logoutButton.addEventListener("click", () => {
        signOut(auth).then(() => {
            window.location.href = "index.html"; // Redirect to login page
        }).catch((error) => {
            console.error("Logout error:", error);
        });
    });
});
