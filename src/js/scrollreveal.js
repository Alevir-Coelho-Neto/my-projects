document.addEventListener("DOMContentLoaded", function () {
  const revelar = ScrollReveal({ reset: false });

  /* Text Sticky */

  revelar.reveal(".title-text-sticky", {
    duration: 1700,
    distance: "120px",
    easing: "ease-out",
    interval: 200,
    origin: "top",
  });

  revelar.reveal(".paragraph-text-sticky", {
    duration: 1700,
    distance: "120px",
    easing: "ease-out",
    interval: 200,
    origin: "left",
  });

  /* Cards*/

  revelar.reveal(".card", {
    duration: 1700,
    distance: "120px",
    easing: "ease-out",
    interval: 200,
    origin: "right",
  });
  /* Tablets */

  if (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches) {
    revelar.reveal(".card1", {
      origin: "left",
    });

    revelar.reveal(".card3", {
      origin: "left",
    });

    revelar.reveal(".card5", {
      origin: "left",
    });

    revelar.reveal(".card7", {
      origin: "left",
    });
  }

  /* Celulares */

  if (window.matchMedia("(max-width: 767px)").matches) {
    revelar.reveal(".card2", {
      origin: "left",
    });

    revelar.reveal(".card4", {
      origin: "left",
    });

    revelar.reveal(".card6", {
      origin: "left",
    });

    revelar.reveal(".card8", {
      origin: "left",
    });
  }
});
