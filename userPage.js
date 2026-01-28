// Search system

// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";


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

const explText = document.querySelector(".explanationText");
const logOutBtn = document.querySelector(".logOutButton")


// Checking authentication function

onAuthStateChanged(auth, (user) => {

    if (user) {

        const email = user.email;

        explText.textContent = `
            Hei ${email}!
            Nå er du på din personlige side.
            Her kan du reservere varer fra kantina og hente dem senere.
            For å reservere varer, søk etter varen og klikk "Reservere vare".
        `;

    } else {

        window.location.href = "./index.html"

    }

});


// Sign out function

logOutBtn.addEventListener("click", () => {

    signOut(auth).then(() => {

        window.location.href = "./index.html";

    });

});


// Search system

// HTML elements / search system

const searchInp = document.querySelector("searchInput")
const searchButton = document.querySelector(".searchButton")


// Search system

searchButton.addEventListener("click", () => {

    alert("I progress... (Fungerer ikke)")

})