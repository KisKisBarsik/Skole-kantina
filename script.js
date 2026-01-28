// Random menu system

// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";


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

import { getDatabase, set, get, update, remove, ref, child, push }
from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js"

const db = getDatabase();


// Auto-Loading data from the FireBase

document.addEventListener("DOMContentLoaded", () => {

    console.log('Alt fungerer');

    const dbRef = ref(db)

    get(child(dbRef, "Positions")).then((snapshot) => {

        if (snapshot.exists()) {

            const data = snapshot.val();
            console.log(data);

            const keys = Object.keys(data);
            
            for (let i = keys.length - 1; i > 0; i--) {
                
                const j = Math.floor(Math.random() * (i + 1));
                [keys[i], keys[j]] = [keys[j], keys[i]]
                
            }


            const sumOfTheKeys = []
            sumOfTheKeys.push(keys[0], keys[1], keys[2], keys[3], keys[4], keys[5])

            console.log(sumOfTheKeys);
            

            for (let i = 0; i < sumOfTheKeys.length; i++) {

                get(child(dbRef, "Positions/" + sumOfTheKeys[i])).then((childSnapshot) => {

                    const data2 = childSnapshot.val();


                    const dailyMenu = document.querySelector(".dailyMenu")


                    const div = document.createElement("div")
                    div.className = "posN"

                    dailyMenu.appendChild(div)


                    const pNImg = document.createElement("img")
                    pNImg.classList.add("pNImg")

                    div.appendChild(pNImg)


                    const pNTitle = document.createElement("p")
                    pNTitle.classList.add("pNTitle")

                    div.appendChild(pNTitle)


                    const pNIngr = document.createElement("p")
                    pNIngr.classList.add("pNIngr")

                    div.appendChild(pNIngr)


                    const pNPortion = document.createElement("p")
                    pNPortion.classList.add("pNPortion")

                    div.appendChild(pNPortion)

                    
                    const prDecoration = document.createElement("div")
                    prDecoration.classList.add("prDecoration")

                    div.appendChild(prDecoration)


                    const prPN = document.createElement("p")
                    prPN.classList.add("prPN")

                    prDecoration.appendChild(prPN)


                    pNImg.src = data2.Image
                    pNTitle.innerHTML = data2.Position
                    pNIngr.innerHTML = "Ingr.:" + " " + data2.Ingredients
                    pNPortion.innerHTML = data2.Portion + " " + "gram"
                    prPN.innerHTML = data2.Price + " " + "kr"

                })

            }

        } else {

            console.log("Ingen data funnet");

        }

    }).catch((error) => {

        alert("Error" + error)

    })

})