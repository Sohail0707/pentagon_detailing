const images = document.querySelectorAll(".gallery_img");

function carousel(direction) {
  let current;
  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains("center")) {
      current = i;
    }
  }

  if (direction === "left") {
    if (current > 0) {
      images[current].classList.remove("center");
      images[current].classList.add("right");
      images[current - 1].classList.remove("left");
      images[current - 1].classList.add("center");
    }
  }

  if (direction === "right") {
    if (current < images.length - 1) {
      images[current + 1].classList.remove("right");
      images[current + 1].classList.add("center");
      images[current].classList.remove("center");
      images[current].classList.add("left");
    }
  }
}
