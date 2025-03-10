# Firebase Authentication and User Dashboard

A simple authentication system using Firebase that allows users to sign up, log in, and view their profile information on a dashboard.

## 🚀 Features
- 🔐 **User Authentication** – Signup/Login using Firebase Authentication.
- 📂 **User Data Storage** – Store user details (name & email) in Firebase Realtime Database.
- 🏠 **Dashboard** – Display user details after login.
- 🔓 **Logout Functionality** – Secure logout with Firebase.

## 📂 Project Structure
```
/firebase-auth-app
│── index.html         # Signup & Login Page
│── dashboard.html     # Dashboard Page
│── README.md          # Project Documentation
```

## 📜 Getting Started

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/sarmadgardezi/firebase-auth-app.git
cd firebase-auth-app
```

### 2️⃣ **Set Up Firebase**
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Enable **Authentication (Email/Password)**.
4. Set up **Firebase Realtime Database** in test mode.
5. Copy your Firebase **config** from **Project Settings** → `General` → `Your apps`.

### 3️⃣ **Update Firebase Config**
Replace the placeholders in `index.html` and `dashboard.html` with your Firebase project details:

```js
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### 4️⃣ **Run the Project**
Simply open `index.html` in your browser.

## 🎯 Usage
1. **Signup** – Create an account with Name, Email & Password.
2. **Login** – Use the registered credentials to log in.
3. **Dashboard** – After login, view user details.
4. **Logout** – Click the logout button to exit.

## 🛠 Technologies Used
- 🔥 **Firebase Authentication** (Email/Password)
- 🔥 **Firebase Realtime Database**
- 🌐 **HTML, CSS, JavaScript**

## 📩 Contact & Support
👤 **Sarmad Gardezi**  
📧 Email: [info@sarmadgardezi.com](mailto:info@sarmadgardezi.com)  
🐦 Twitter: [@sarmadgardezi](https://twitter.com/sarmadgardezi)  
📸 Instagram: [@sarmadgardezi](https://instagram.com/sarmadgardezi)  
🌍 Website: [sarmadgardezi.com](https://sarmadgardezi.com)  

---

If you like this project, ⭐ **star the repo** and feel free to contribute! 🚀
