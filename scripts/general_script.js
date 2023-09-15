"use strict";

// Smooth scrolling=======================================
const pathName = window.location.pathname;
const allLinks = document.querySelectorAll("a");

window.onload = function () {
  const url = window.location.href;
  const urlParams = new URLSearchParams(url.split("?")[1]);
  const id = urlParams.get("id");
  if (id) {
    const sectionEl = document.getElementById(id);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }
};

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const linkHref = link.getAttribute("href");
    const linkURL = new URL(linkHref, window.location.href);
    const linkID = linkURL.searchParams.get("id");
    let linkSiteName = linkURL.pathname;

    if (pathName === linkSiteName) {
      const sectionEl = document.getElementById(linkID);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    } else if (pathName != linkSiteName) {
      window.location.href = linkURL;
    }
  });
});

// Function to scroll the window to the top
const scrollBtn = document.querySelector(".scroll_top");
// this function has been called from html code
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Sticky nav bar===========================================
function addStickyClass() {
  const navBar = document.querySelector(".main_nav");
  if (!navBar) return; // Make sure the nav bar element exists

  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= windowHeight * 0.5) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", addStickyClass);

// mobile navigation=========================

const mobileBtn = document.querySelector(".mobile_nav_btn");
const mainNav = document.querySelector(".main_nav");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".main_nav .nav_link");

mobileBtn.addEventListener("click", () => {
  mainNav.classList.toggle("nav_open");
  mainNav.classList.contains("nav_open")
    ? (body.style.overflowY = "hidden")
    : (body.style.overflow = "auto");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.contains("nav_open")
      ? mainNav.classList.remove("nav_open")
      : "";
    mainNav.classList.contains("nav_open")
      ? (body.style.overflowY = "hidden")
      : (body.style.overflow = "auto");
  });
});
// ==========================================

// Navigation text indicatior ===============
const navigationLinks = document.querySelectorAll(".nav_link");
window.onload = function () {
  navigationLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    pathName === linkHref ? link.classList.add("current_site") : "";
  });
};
