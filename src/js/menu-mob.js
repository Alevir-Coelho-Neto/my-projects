const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-list a"); // Seleciona todos os links dentro da lista de navegação

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active"); // Fecha o menu ao clicar em um link
  });
});

