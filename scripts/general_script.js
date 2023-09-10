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
      if (pathName === linkSiteName) {
        console.log(pathName.includes(linkSiteName));
        const sectionEl = document.getElementById(linkID);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (pathName != linkSiteName) {
      const curerntURL = new URL(window.location.href);
      curerntURL.pathname = linkHref;
      let newURL = curerntURL.toString();
      window.location.href = newURL;
    }
  });
});
