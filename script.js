const images = document.querySelectorAll(".gallery_img");
const galleryDotContainer = document.querySelector(".caro_nav_container");

// For the navigation indcator of work images
let dotList;
window.addEventListener("load", () => {
  let result = "";
  for (let i = 0; i < images.length; i++) {
    result += `<span class="dots"></span>`;
  }
  galleryDotContainer.innerHTML = result;
  dotList = document.querySelectorAll(".caro_nav_container .dots");
  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains("center")) {
      dotList[i].classList.add("active");
    }
  }
});

// function to make the carousel working
const carousel = (direction) => {
  let current;
  // this will find the center image
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

      dotList[current].classList.remove("active");
      dotList[current - 1].classList.add("active");
    }
  }

  if (direction === "right") {
    if (current < images.length - 1) {
      images[current + 1].classList.remove("right");
      images[current + 1].classList.add("center");
      images[current].classList.remove("center");
      images[current].classList.add("left");

      dotList[current].classList.remove("active");
      dotList[current + 1].classList.add("active");
    }
  }
};
