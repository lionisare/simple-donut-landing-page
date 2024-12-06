const navbarMenu = document.querySelector(".navbar__menu"),
  btnMenu = document.querySelector(".navbar__toggle"),
  btnClose = document.querySelector(".navbar__close");

if (btnMenu) {
  btnMenu.addEventListener("click", () => {
    navbarMenu.classList.add("open-menu");
  });
}
if (btnClose) {
  btnClose.addEventListener("click", () => {
    navbarMenu.classList.remove("open-menu");
  });
}
