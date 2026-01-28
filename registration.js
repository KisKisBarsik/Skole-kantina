// Registration system

// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";


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


// Registration function

const regBtn = document.getElementById("regBtn")

regBtn.addEventListener("click", () => {

    // HTML elements

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const confP = document.getElementById("confirmPassword").value

    if (!email || !password || !confP) {
        
        alert("Du må fylle alle de feltene...")

    } else if (password === confP) {

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            alert("Konto opprettet! Du vil bli sendt til login om 5 sekunder...")

            document.getElementById("email").value = ""
            document.getElementById("password").value = ""
            document.getElementById("confirmPassword").value = ""

            setTimeout(() => {
                window.location.href = "./authentication.html"
            }, 5000)

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        })
        
    } else {

        alert("Passord må være like på både felter...")

    }

})