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

// editing testimonial container height
document.addEventListener("DOMContentLoaded", () => {
  const height = testimonialContainer__2.clientHeight;
  console.log(height);
  testimonialContainer__1.style.height = `${height}px`;
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
