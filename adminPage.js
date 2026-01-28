// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getDatabase, set, get, update, remove, ref, child, push }
from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js"


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
const db = getDatabase(app);


// HTML elements / checking auth + log out

const greatingText = document.querySelector(".greatingText")
const logOutBtn = document.querySelector(".logOutButton")


// Checking authentication function

onAuthStateChanged(auth, (user) => {

    if (user) {

        const email = user.email;

        greatingText.textContent = `
            Hei ${email}!
            Nå er du på admin side.
            Her kan du legge til varer og slette dataene fra database.
        `;

    } else {

        // window.location.href = "./index.html"

    }

});


// Sign out function

logOutBtn.addEventListener("click", () => {

    signOut(auth).then(() => {

        window.location.href = "./index.html";

    });

});


// HTML elements / adding data

const enterID = document.getElementById("addingID")
const enterFoodP = document.getElementById("addingPosition")
const enterIngr = document.getElementById("addingIngredients")
const enterPortion = document.getElementById("addingPortion")
const enterImage = document.getElementById("addingImg")
const enterPrice = document.getElementById("addingPrice")

const submitBtn = document.getElementById("submitBtn")


// Adding data to the FireBase

submitBtn.addEventListener('click', () => {

    if (!enterID.value) {

        alert("ID felt kan ikke være tom!")
        
    } else {

        set(ref(db, "Positions/" + enterID.value), {

            Position: enterFoodP.value,
            ID: enterID.value,
            Ingredients: enterIngr.value,
            Portion: enterPortion.value,
            Image: enterImage.value,
            Price: enterPrice.value

        })

        .then(() => {

            alert("Data ble lagret!")
            enterFoodP.value = "";
            enterIngr.value = "";
            enterPortion.value = "";
            enterImage.value = "";
            enterPrice.value = "";

        })

        .catch((error) => {

            alert(error)

        })

        enterID.value = "";

    }

})


// HTML elements / deleting data

const deletingPosWithID = document.getElementById("deletingPosWithID")
const submitBtn2 = document.getElementById("submitBtn2")


// Deleting data from the FireBase

submitBtn2.addEventListener('click', () => {

    const idToDelete = deletingPosWithID.value.trim();

    if (!idToDelete) {

        alert("ID felt kan ikke være tom!");
        return;
        
    }

    const posRef = ref(db, "Positions/" + idToDelete);

    remove(posRef)

        .then(() => {

            alert(`Posisjon med ID '${idToDelete}' ble slettet!`);
            deletingPosWithID.value = "";

        })
        .catch((error) => {

            alert("Feil ved sletting: " + error);

        });

})