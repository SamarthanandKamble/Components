let nextImageBtn = document.querySelector(".nextBtn");
let prevImageBtn = document.querySelector(".prevBtn");
let displayImage = document.querySelector("#displayImg");

let currentImg = 0;

const imageList = [
  "/Carousel/Images/img1.jpg",
  "/Carousel/Images/img2.jpg",
  "/Carousel/Images/img3.jpg",
  "/Carousel/Images/img4.jpg",
];

function nextImage() {
  if (currentImg >= imageList.length - 1) {
    currentImg = 0;
  } else {
    currentImg++;
  }
  console.log(imageList[currentImg]);
  displayImage.setAttribute("src", imageList[currentImg]);
}

function prevImage() {
  if (currentImg <= 0) {
    currentImg = imageList.length - 1;
  } else {
    currentImg--;
  }
  console.log(imageList[currentImg]);``
  displayImage.setAttribute("src", imageList[currentImg]);
}

nextImageBtn.addEventListener("click", () => {
  nextImage();
});
prevImageBtn.addEventListener("click", () => {
  prevImage();
});
