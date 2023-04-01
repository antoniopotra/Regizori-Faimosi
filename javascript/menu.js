const menu_icon = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu_icon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});