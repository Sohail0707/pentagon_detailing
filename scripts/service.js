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
