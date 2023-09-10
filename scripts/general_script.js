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

    // let linkID = idMatch ? idMatch[1] : "";

    console.log("the anchor tag link " + linkHref);
    console.log("id from anchor tag " + linkID);
    console.log("the site name from anchor tag " + linkSiteName);

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
      // const curerntHref = window.location.pathname;
      console.log("the current url is " + curerntURL);
      // console.log("the current url site name is " + curerntHref);

      // window.location.href = `${curerntHref}${linkSiteName.replace("/", "")}`;
      // let newURL = `${curerntHref}${linkHref.replace("/", "")}`;
      let newURL = curerntURL.toString();
      console.log("the new url is " + newURL);
    }
  });
});
