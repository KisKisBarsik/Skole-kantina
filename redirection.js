// Redirecting the user to the login page

// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";


// Web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyBGO5LCQRDjim0fYsiP2IftpHwfrZA8KII",
    authDomain: "school-canteen-2c824.firebaseapp.com",
    databaseURL: "https://school-canteen-2c824-default-rtdb.firebaseio.com",
    projectId: "school-canteen-2c824",
    storageBucket: "school-canteen-2c824.firebasestorage.app",
    messagingSenderId: "917091665550",
    appId: "1:917091665550:web:7d492589990fd7261d6bdf"

};


// Firebase settings

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// HTML elements

const logInBtn = document.querySelector(".logInButton")


// Redirection function

let currentUser = null

onAuthStateChanged(auth, (user) => {
    
    currentUser = user;

});


logInBtn.addEventListener("click", () => {

    if (!currentUser) {

        window.location.href = "./authentication.html";
        
    }

    if (currentUser.email === "admin@afk.no") {

        window.location.href = "./adminPage.html";

    } else {

        window.location.href = "./userPage.html";

    }

})