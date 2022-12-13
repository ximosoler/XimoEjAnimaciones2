const btn = document.querySelector(".btn");
const coche = document.querySelector(".coche");

btn.addEventListener("click", () => {
    coche.classList.toggle("animacion");
});