const btn = document.querySelector(".btn");
const pizza = document.querySelector(".pizza");

btn.addEventListener("click", () => {
    pizza.classList.toggle("animacion");
});