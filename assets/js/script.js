// Toggle Navbar for Mobile
const navToggleBtn = document.querySelector("[data-menu-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  header.classList.toggle("active");
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