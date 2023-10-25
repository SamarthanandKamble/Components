let menu = document.querySelector("#ul-menu");
let menuIcon = document.querySelector("#menu-logo");
let paras = document.querySelectorAll(".paras");
let subMenuCnt = document.querySelector("#submenu-1-container");
let subMenuCntIcon = document.querySelector("#sub-menu-cnt-icon");
let isMenuOpen = false;
let isSubMenuOpen = false;

menuIcon.addEventListener("click", () => {
  if (isMenuOpen) {
    menu.style.display = "none";
    menu.style.backgroundColor = "#000";
    menu.style.opacity = 0;
    paras.forEach((e) => (e.style.opacity = 1));
    isMenuOpen = false;
    isSubMenuOpen = false;
    subMenuCnt.style.display = "none";
  } else {
    menu.style.display = "block";
    menu.style.zIndex = 1;
    menu.style.backgroundColor = "#000";
    menu.style.opacity = 1;
    paras.forEach((e) => (e.style.opacity = 0.2));
    isMenuOpen = true;
  }
});

subMenuCntIcon.addEventListener("click", () => {
  if (isSubMenuOpen) {
    subMenuCnt.style.display = "none";
    isSubMenuOpen = false;
  } else {
    subMenuCnt.style.display = "block";
    isSubMenuOpen = true;
  }
});
