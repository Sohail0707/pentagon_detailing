const iconpack = {
  arrow_down: `<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="icon">
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>`,
  arrow_left: `<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="icon">
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>`,
  arrow_right: `<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="icon">
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>`,
};

const icons = document.querySelectorAll("i");
window.addEventListener("load", function () {
  icons.forEach((icon) => {
    icon.innerHTML = iconpack[icon.getAttribute("name")];
  });
});
