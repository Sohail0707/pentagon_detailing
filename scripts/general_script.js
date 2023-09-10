"use strict";
// Javascript code to implement smooth scrolling
window.addEventListener("load", () => {
  const url = window.location.href;
  const urlParams = new URLSearchParams(url.split("?")[1]);
  const id = urlParams.get("id");
  if (id) {
    const sectionEl = document.getElementById(id);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }
});

let pathName = window.location.pathname;
const currentPage = pathName.replace("/", "");
const allLinks = document.querySelectorAll("a");
console.log(pathName);
console.log(currentPage);

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const linkHref = link.getAttribute("href");
    const idMatch = linkHref.match(/[?&]id=([^&]+)/);
    let id = "";
    idMatch ? (id = idMatch[1]) : "";

    if (linkHref.includes(currentPage)) {
      const sectionEl = document.getElementById(id);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (!linkHref.includes(currentPage)) {
      console.log(linkHref);
      window.location.href = linkHref;
    }
  });
});
