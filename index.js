"use strict";

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const navList = document.getElementById("nav-list");
const overLay = document.getElementById("overlay");

function closeNav() {
  navList.classList.remove("show");
  overLay.classList.add("hide-overlay");
}

menuBtn.addEventListener("click", () => {
  navList.classList.add("show");
  overLay.classList.remove("hide-overlay");
});
closeBtn.addEventListener("click", closeNav);
overLay.addEventListener("click", closeNav);
