"use strict";

// Smooth scrolling========================================
window.onload = function () {
  const url = window.location.href;
  const urlParams = new URLSearchParams(url.split("?")[1]);
  const id = urlParams.get("id");
  if (id) {
    const sectionEl = document.getElementById(id);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }
};

const pathName = window.location.pathname;
const allLinks = document.querySelectorAll("a");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const linkHref = link.getAttribute("href");
    const linkURL = new URL(linkHref, window.location.href);
    const linkID = linkURL.searchParams.get("id");
    const linkSiteName = linkURL.pathname;

    if (linkID) {
      if (pathName === linkSiteName || pathName === "/") {
        const sectionEl = document.getElementById(linkID);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (pathName != linkSiteName && pathName != "/") {
      window.location.href = linkURL;
    }
  });
});

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
