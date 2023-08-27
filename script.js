const images = document.querySelectorAll(".gallery_img");
const rightBtn = document.querySelector(".btn_gallery.right");
const leftBtn = document.querySelector(".btn_gallery.left");

// rightBtn.addEventListener("click", carousel("right"));
// leftBtn.addEventListener("click", carousel("left"));

function carousel(direction) {
  let current;
  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains("center")) {
      current = i;
    }
  }
  console.log(current);

  if (direction === "left") {
    console.log("left direction");
    if (current > 0) {
      images[current].classList.remove("center");
      images[current].classList.add("right");
      images[current - 1].classList.remove("left");
      images[current - 1].classList.add("center");
    }
  }

  if (direction === "right") {
    console.log("right direction");
    if (current < images.length - 1) {
      images[current].classList.remove("center");
      images[current].classList.add("left");
      images[current + 1].classList.remove("right");
      images[current + 1].classList.add("center");
    }
  }
}
