'use strict';

document.querySelector(".icon--menu").addEventListener('click', function() {
  document.body.classList.add("scroll-disable");
  console.log("hello");
});

document.querySelector(".icon--close").addEventListener('click', function() {
  document.body.classList.remove("scroll-disable");
});

document.querySelectorAll(".nav__link").forEach((e) => {
  e.addEventListener('click', function() {
    document.body.classList.remove("scroll-disable");
  })
});


