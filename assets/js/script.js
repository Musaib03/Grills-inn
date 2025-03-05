document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#splide', {
      autoplay: true,
      interval: 3000,
      perPage: 5,
      perMove: 1,
      gap: '1rem',
      breakpoints: {
        1024: {
          perPage: 3,
        },
        768: {
          perPage: 1,
        },
      },
    });
    splide.mount();
  });

  const navbar = document.querySelector("nav");

  window.addEventListener("scroll", () => {
      if (window.scrollY < 50) {
          navbar.classList.remove("scrolled");
      } else {
          navbar.classList.add("scrolled");
      }
  });