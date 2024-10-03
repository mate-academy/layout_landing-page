'use strict';

const menu = document.getElementById('menu');
const menuToggle = document.querySelectorAll('.menu-toggle');
const menuLinks = document.querySelectorAll('.menu__nav a');

if (window.location.hash === '#menu') {
  document.body.classList.add('page__body--lock-scroll');
}

menuToggle.forEach((el) => {
  el.addEventListener('click', () => {
    document.body.classList.toggle('page__body--lock-scroll');
  });
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('page__body--lock-scroll');
  });
});
