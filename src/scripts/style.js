/* eslint-disable no-undef */
"use strict";

let openMenu = document.querySelector("#open-menu");
let closeMenu = document.querySelector("#close-menu");
let aside = document.querySelector(".aside");

openMenu.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  aside.style.left = "0";
});

closeMenu.addEventListener("click", () => {
  document.body.style.overflow = "auto";

  aside.style.left = "100%";
});

aside.addEventListener("click", (event) => {
  if (event.target.tagName === "A" && event.target.closest("aside")) {
    document.body.style.overflow = "auto";

    aside.style.left = "100%";
  }
});
