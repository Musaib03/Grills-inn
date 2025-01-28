document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});




// // Toggle Search Box
// const searchBtn = document.querySelector("[data-search-btn]");
// const searchContainer = document.querySelector("[data-search-container]");
// const searchCloseBtn = document.querySelector("[data-search-close-btn]");

// searchBtn.addEventListener("click", () => {
//   searchContainer.classList.add("active");
// });

// searchCloseBtn.addEventListener("click", () => {
//   searchContainer.classList.remove("active");
// });