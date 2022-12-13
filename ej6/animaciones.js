const btn = document.querySelector(".btn");
const astronauta = document.querySelector(".astronauta");

btn.addEventListener("click", () => {
    astronauta.classList.toggle("animacion");
});