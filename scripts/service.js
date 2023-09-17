"use strict";

// ============HOVER EFFECT ON PRICING CARD============
const fullCard = document.querySelector(".full_detail_container");
const premiumCard = document.querySelector(".premium_detail_container");
const signatureCard = document.querySelector(".signature_detail_container");

fullCard.addEventListener("mouseover", () => {
  premiumCard.classList.remove("top");
  fullCard.classList.add("top");
});

fullCard.addEventListener("mouseout", () => {
  premiumCard.classList.add("top");
  fullCard.classList.remove("top");
});

signatureCard.addEventListener("mouseover", () => {
  premiumCard.classList.remove("top");
  signatureCard.classList.add("top");
});

signatureCard.addEventListener("mouseout", () => {
  premiumCard.classList.add("top");
  signatureCard.classList.remove("top");
});

// ===============SELECT SERVICE BUTTON===============
const detailContainers = document.querySelectorAll(".detail_container");
const selectServiceButtons = document.querySelectorAll(".select_btn");

for (let i = 0; i < selectServiceButtons.length; i++) {
  selectServiceButtons[i].addEventListener("click", () => {
    selectServiceButtons.forEach((btn) => {
      btn.classList.contains("active") ? btn.classList.remove("active") : "";
    });

    selectServiceButtons[i].classList.contains("active")
      ? ""
      : selectServiceButtons[i].classList.add("active");

    detailContainers.forEach((container) => {
      container.classList.contains("active")
        ? container.classList.remove("active")
        : "";
    });

    detailContainers[i].classList.contains("active")
      ? ""
      : detailContainers[i].classList.add("active");
  });
}
