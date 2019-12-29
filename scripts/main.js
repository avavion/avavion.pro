// Burger button

const burgerButton = document.getElementById("burger-btn"),
  menuList = document.getElementById("menu-list");

burgerButton.addEventListener("click", () => {
  menuList.classList.toggle("header-nav__menu-list--active");
});
