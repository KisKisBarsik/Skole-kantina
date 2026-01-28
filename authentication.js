// Authentication system

// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";


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
const auth = getAuth(app)


// HTML elements

const logInBtn = document.getElementById("logInBtn");


// Log in function

logInBtn.addEventListener("click", () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {

        alert("Du må fylle alle feltene");
        return;

    } else {

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {

            if (email === "admin@afk.no") {

                alert("Hei admin, du vet at du vil bli sendt til admin side i 5 sek., ikke sant?)")
                setTimeout(() => {
                    window.location.href = "./adminPage.html"
                }, 5000)
                
            } else {

                alert("Du er innlogget! Du vil bli sendt til din side om 5 sekunder...");
                setTimeout(() => {
                    window.location.href = "./userPage.html";
                }, 5000)

            }

        })
        .catch((error) => {

            alert(error.message);

        });

    }
        
});