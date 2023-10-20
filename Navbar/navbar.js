let dropdown = document.querySelector("#dropdown-icon");
let dropdownMenuOne = document.querySelector("#dropdown-menu-one");
let webDesign = document.querySelector("#web-design");
let checkoutMore = document.querySelector("#checkout-more");
let dropdownMenuTwo = document.querySelector("#dropdown-menu-two");
let dropdownMenuThree = document.querySelector("#dropdown-menu-three");
function expandDropdown() {
  let flag = true;
  dropdown.addEventListener("click", function () {
    if (flag) {
      dropdownMenuOne.style.display = "block";
      dropdownMenuOne.style.top = "10px";
      dropdownMenuOne.style.right = "-7px";
      flag = false;
    } else {
      dropdownMenuOne.style.display = "none";
      dropdownMenuTwo.style.display = "none";
      dropdownMenuThree.style.display = "none";
      flag = true;
    }
  });
}
expandDropdown();
function expandDropdownTwo() {
  let drop2 = true;
  webDesign.addEventListener("click", () => {
    if (drop2) {
      dropdownMenuTwo.style.display = "block";
      dropdownMenuTwo.style.right = "82px";
      drop2 = false;
    } else {
      dropdownMenuTwo.style.display = "none";
      dropdownMenuThree.style.display = "none";
      drop2 = true;
    }
  });
}
expandDropdownTwo();

function expandDropdownThree() {
  let drop3 = true;
  checkoutMore.addEventListener("click", () => {
    if (drop3) {
      dropdownMenuThree.style.display = "block";
      dropdownMenuThree.style.top = "20px";
      dropdownMenuThree.style.right = "68px";
      drop3 = false;
    } else {
      dropdownMenuThree.style.display = "none";
      drop3 = true;
    }
  });
}
expandDropdownThree();
