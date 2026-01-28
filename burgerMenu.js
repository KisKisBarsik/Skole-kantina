const burgerMenu = document.querySelector(".burgerMenu")
const commonNav = document.querySelector(".commonNav")

burgerMenu.addEventListener("click", () => {

    burgerMenu.classList.toggle("active");
    commonNav.classList.toggle("active")

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    burgerMenu.classList.remove("active")
    commonNav.classList.remove("active")
}))