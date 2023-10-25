let menu = document.querySelector("#ul-menu");
let menuIcon = document.querySelector("#menu-logo");
let paras = document.querySelectorAll(".paras");
let isMenuOpen = false;

menuIcon.addEventListener("click", () => {
  if (isMenuOpen) {
    menu.style.display = "none";
    menu.style.backgroundColor = "#000";
    menu.style.opacity = 0;
    paras.forEach((e) => (e.style.opacity = 1));
    isMenuOpen = false;
  } else {
    menu.style.display = "block";
    menu.style.backgroundColor = "#000";
    menu.style.opacity = 1;
    paras.forEach((e) => (e.style.opacity = 0.2));
    isMenuOpen = true;
  }
  console.log(isMenuOpen);
});
