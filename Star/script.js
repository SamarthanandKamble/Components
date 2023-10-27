let ulCnt = document.querySelector(".ul-container");
let listItems = document.querySelectorAll(".li-items");
let prevIndex = 0;

function mouseOverEvent(e) {
  fillColor(e);
}

function fillColor(count) {
  for (let index = 0; index < count; index++) {
    listItems[index].classList.add("fill-color");
  }

  for (let index = count; index < listItems.length; index++) {
    if (count === "1") {
      console.log("The count is 1");
    } else if (listItems[index - 1].classList.contains("fill-color")) {
      listItems[index].classList.remove("fill-color");
    }
  }
}

ulCnt.addEventListener("click", (e) => {
  fillColor(e.target.id);

});

ulCnt.addEventListener("mouseover", (e) => {
  if (e.target.id) {
    mouseOverEvent(e.target.id);
  }
});

