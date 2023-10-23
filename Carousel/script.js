let changeImageBtn = document.querySelector(".nextBtn");
let currentImg = 0;

const imageList = [
  "/Carousel/Images/img1.jpg",
  "/Carousel/Images/img2.jpg",
  "/Carousel/Images/img3.jpg",
  "/Carousel/Images/img4.jpg",
];

function changeImage() {
  if (currentImg < imageList.length - 1) {
    currentImg++;
  } else {
    if (currentImg === imageList.length - 1) {
      currentImg = 0;
    } else {
      currentImg--;
    }
  }
  displayImg.setAttribute("src", imageList[currentImg]);
}

changeImageBtn.addEventListener("click", () => {
  changeImage();
});
