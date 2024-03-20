'use strict';

const menuIcon = document.querySelector('.icon--menu');
const closeIcon = document.querySelector('.icon--close');
const body = document.body;

menuIcon.addEventListener('click', function () {
  body.classList.add('lock-scroll');
});

closeIcon.addEventListener('click', function () {
  body.classList.remove('lock-scroll');
});
