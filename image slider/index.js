const nextE1 = document.querySelector(".next");

const imageContainerE1 = document.querySelector(".image-container");

let currentImg = 1;

nextE1.addEventListener("click", () => {
     currentImg++;
      updateImg();
});
function updateImg() {
    imageContainerE1.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
}