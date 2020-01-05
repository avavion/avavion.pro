// Burger button

let burgerButton = document.getElementById("burger-btn");
let menuList = document.getElementById("menu-list");

burgerButton.addEventListener("click", () => {
  menuList.classList.toggle("header-nav__menu-list--active");
});
