'use strict';
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const closeIcon = document.querySelector(".close-icon");
  const menu = document.querySelector(".page__menu");

  if (burger && closeIcon && menu) {
    burger.addEventListener("click", (e) => {
      e.preventDefault(); // prevent jump to #menu
      menu.classList.add("active");
    });

    closeIcon.addEventListener("click", (e) => {
      e.preventDefault(); // prevent jump to #menu
      menu.classList.remove("active");
    });
  }
});


document.querySelectorAll(".menu__item a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
