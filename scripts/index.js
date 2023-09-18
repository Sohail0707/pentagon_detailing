"use strict";

// -------------------------------------------------------
// ---------------------- VARIABLES ----------------------

// gallery----------
const gallery_indicator_con = document.querySelector(
  ".section_gallery .gallery_indicator_con"
);
const gallery_images = document.querySelectorAll(".gallery_img");
let gallery_indicators;

// testimonial----------
const testimonialContainer__1 = document.querySelector(
  ".testimonial_container__1"
);
const testimonialContainer__2 = document.querySelector(
  ".testimonial_container___2"
);
const testimonialIndContainer = document.querySelector(
  ".testimonial_indicator_con"
);
const review_box = testimonialContainer__2.querySelectorAll(".review_box");
let testimonial_indicators;

// -------------------------------------------------------

// =======================================================
// ==================== STYLING SCRIPT ===================

// Navigation dots inside the work gallery
document.addEventListener("DOMContentLoaded", () => {
  let result = "";
  for (let i = 0; i < gallery_images.length; i++) {
    i == 1
      ? (result += `<span class="gallery_indicator active"></span>`)
      : (result += `<span class="gallery_indicator"></span>`);
  }
  gallery_indicator_con.innerHTML = result;
  gallery_indicators = document.querySelectorAll(".gallery_indicator");
});

// Navigation dots inside the testimonial section
document.addEventListener("DOMContentLoaded", () => {
  let result = "";
  for (let i = 0; i < review_box.length; i++) {
    i == 0
      ? (result += `<span class="testimonial_indicator active"></span>`)
      : (result += `<span class="testimonial_indicator"></span>`);
  }
  testimonialIndContainer.innerHTML = result;
  testimonial_indicators = document.querySelectorAll(".testimonial_indicator");
});

// ====================== STYLE END ======================
// =======================================================

// =======================================================
// ================ EVENTS OR ANIMATIONS =================

// function to make the gallery carousel working
const carousel = (direction) => {
  let current;
  // this will find the center image
  for (let i = 0; i < gallery_images.length; i++) {
    if (gallery_images[i].classList.contains("center")) {
      current = i;
    }
  }

  if (direction === "left") {
    if (current > 0) {
      gallery_images[current].classList.remove("center");
      gallery_images[current].classList.add("right");
      gallery_images[current - 1].classList.remove("left");
      gallery_images[current - 1].classList.add("center");

      gallery_indicators[current].classList.remove("active");
      gallery_indicators[current - 1].classList.add("active");
    }
  }

  if (direction === "right") {
    if (current < gallery_images.length - 1) {
      gallery_images[current + 1].classList.remove("right");
      gallery_images[current + 1].classList.add("center");
      gallery_images[current].classList.remove("center");
      gallery_images[current].classList.add("left");

      gallery_indicators[current].classList.remove("active");
      gallery_indicators[current + 1].classList.add("active");
    }
  }
};

// ---------------scroll the review container---------------
let directionConstant = 1; // if 1 then scroll left, if -1 then scroll right
let currentIndex = 0;
let isHovered = false;

function scrollReview(direction) {
  if (isHovered) return; // If hovered, don't scroll

  const container = testimonialContainer__2;

  if (direction === "left") {
    currentIndex++;
    if (currentIndex >= review_box.length) {
      currentIndex = 0;
    }
  } else if (direction === "right") {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = review_box.length - 1;
    }
  }

  container.scrollTo({
    left: currentIndex * container.clientWidth,
    behavior: "smooth",
  });
}

testimonialContainer__2.addEventListener("mouseenter", () => {
  isHovered = true;
});

testimonialContainer__2.addEventListener("mouseleave", () => {
  isHovered = false;
});

setInterval(() => {
  if (directionConstant === 1) {
    scrollReview("left");
    testimonial_indicators.forEach((el) => {
      el.classList.contains("active") ? el.classList.remove("active") : "";
      testimonial_indicators[currentIndex].classList.add("active");
    });

    if (currentIndex === review_box.length - 1) {
      directionConstant = -1;
    }
  } else if (directionConstant === -1) {
    scrollReview("right");
    testimonial_indicators.forEach((el) => {
      el.classList.contains("active") ? el.classList.remove("active") : "";
      testimonial_indicators[currentIndex].classList.add("active");
    });

    if (currentIndex === 0) {
      directionConstant = 1;
    }
  }
}, 5000);
