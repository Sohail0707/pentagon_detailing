"use strict";

const images = document.querySelectorAll(".gallery_img");
const galleryDotContainer = document.querySelector(".caro_nav_container");

// For the navigation indcator of work images
let galleryNavDots;
window.addEventListener("load", () => {
  let result = "";
  for (let i = 0; i < images.length; i++) {
    result += `<span class="dots"></span>`;
  }
  galleryDotContainer.innerHTML = result;
  galleryNavDots = document.querySelectorAll(".caro_nav_container .dots");
  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains("center")) {
      galleryNavDots[i].classList.add("active");
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

      galleryNavDots[current].classList.remove("active");
      galleryNavDots[current - 1].classList.add("active");
    }
  }

  if (direction === "right") {
    if (current < images.length - 1) {
      images[current + 1].classList.remove("right");
      images[current + 1].classList.add("center");
      images[current].classList.remove("center");
      images[current].classList.add("left");

      galleryNavDots[current].classList.remove("active");
      galleryNavDots[current + 1].classList.add("active");
    }
  }
};

// ///////////////////////////////////////////////////////////
// Testimonial section
const testimonialBox = document.querySelector(".testimonial_box");
const reviews = document.querySelectorAll(".review_box");
const testimonialDotContainer = document.querySelector(
  ".testimonial_indicator_container"
);

let testimonialDot;

window.addEventListener("load", () => {
  let dots = "";
  for (let i = 0; i < parseInt(reviews.length / 2) + 1; i++) {
    dots += `<span class="ind_dots"></span>`;
  }
  testimonialDotContainer.innerHTML = dots;
  testimonialDot = document.querySelectorAll(".ind_dots");
  testimonialDot[0].classList.add("active");
});

// Scroll animation of the testimonial
// /////////////////////////////////////////////////

let currentIndex = 0;
const scrollInterval = 6000; // 6 seconds
let isHovered = false; // Flag to track hover state

testimonialBox.addEventListener("mouseenter", () => {
  isHovered = true;
});

testimonialBox.addEventListener("mouseleave", () => {
  isHovered = false;
});

function scrollLeft() {
  if (!isHovered) {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    updateScroll();
  }
}

function scrollRight() {
  if (!isHovered) {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateScroll();
  }
}

function updateScroll() {
  const containerWidth = testimonialBox.offsetWidth;
  const scrollDistance = -currentIndex * containerWidth;
  reviews.forEach((div) => {
    div.style.transform = `translateX(${scrollDistance}px)`;
  });
}

// Initial scroll setup
updateScroll();

// Set up the scrolling intervals
setInterval(scrollRight, scrollInterval);
setTimeout(() => {
  setInterval(scrollLeft, scrollInterval);
}, scrollInterval / 2);
