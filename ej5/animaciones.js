const btn = document.querySelector(".btn");
const pelota = document.querySelector(".pelota");

btn.addEventListener("click", () => {
    pelota.classList.toggle("animacion");
});
