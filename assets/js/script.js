document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#splide', {
      type: 'loop',
      autoplay: true,
      interval: 3000,
      perPage: 5,
      perMove: 1,
      gap: '1rem',
      breakpoints: {
        768: {
          perPage: 1,
        },
        1024: {
          perPage: 3,
        },
      },
    });
    splide.mount();
  });