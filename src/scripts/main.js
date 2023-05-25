/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
"use strict";

// lock body on menu open
const menu = document.querySelector(".menu");
const iconBurger = document.querySelector(".navbar__icon--type-burger");
const iconClose = document.querySelector(".navbar__icon--type-close");

iconBurger.addEventListener("click", (event) => {
  event.preventDefault();
  document.body.classList.add("page__body--lock");
  menu.classList.add("menu--open");
});

iconClose.addEventListener("click", (event) => {
  event.preventDefault();
  document.body.classList.remove("page__body--lock");
  menu.classList.remove("menu--open");
});

// form submit
const form = document.querySelector(".contact__form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  this.reset();
});
