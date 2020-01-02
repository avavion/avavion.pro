// Burger button

const burgerButton = document.getElementById("burger-btn"),
  menuList = document.getElementById("menu-list");

burgerButton.addEventListener("click", () => {
  menuList.classList.toggle("header-nav__menu-list--active");
});

let showMoreButton = document.querySelector("#btn-show-card");

let workCards = document.querySelectorAll(".works-content-card");

let currentShowCards = 2,
  maxShowCards = currentShowCards + 2;

showMoreButton.addEventListener("click", function() {
  
});
