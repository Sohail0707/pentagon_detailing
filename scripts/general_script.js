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
// const currentPage = pathName.replace("/", "");
const allLinks = document.querySelectorAll("a");
console.log(pathName);
// console.log(currentPage);

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const linkHref = link.getAttribute("href");
    const idMatch = linkHref.match(/[?&]id=([^&]+)/);

    let hrefID = "";
    idMatch ? (hrefID = idMatch[1]) : "";

    console.log("the href link is " + linkHref);
    console.log("id from href is " + hrefID);

    if (hrefID) {
      console.log(pathName.includes(linkHref));
      if (pathName.includes(linkHref)) {
        const sectionEl = document.getElementById(hrefID);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (!pathName.includes(linkHref)) {
      const curerntHref = window.location.href;
      const editedHref = `${curerntHref}${linkHref}`;

      console.log(editedHref);
    }
  });
});
