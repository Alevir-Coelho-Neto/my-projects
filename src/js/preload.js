window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    setTimeout(function () {
      preloader.style.display = "none";
    }, 1000); // 2000ms = 2 segundos de atraso
  });