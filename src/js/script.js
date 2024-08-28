"use strict";

const MENU_BUTTON = document.getElementById("menu-button");
const MENU = document.getElementById("menu");
const HEADER = document.querySelector("header");

console.log(HEADER);

const CALL_LINK = document.getElementById("call-link");

MENU_BUTTON.onclick = () => {
  CALL_LINK.classList.toggle("invisible");
  MENU_BUTTON.classList.toggle("active");
  MENU.classList.toggle("active");
  document.querySelector('header').classList.toggle("header--bg-white");
  document.body.classList.toggle("unscrollable");
};
