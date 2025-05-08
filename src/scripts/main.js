'use strict';

const menuIcon = document.querySelector('.icon--menu');
const closeIcon = document.querySelector('.icon--close');
const form = document.querySelector('.contacts__form');
const menuLinks = document.querySelectorAll('.nav__link');
const scrollbarWidth = window.innerWidth - document.body.offsetWidth;

// Open and close menu without scroll
menuIcon.addEventListener('click', () => {
  document.body.classList.add('menu-open');
  document.body.style.paddingRight = `${scrollbarWidth}px`;
});

closeIcon.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
  document.body.style.paddingRight = '0';
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    document.body.style.paddingRight = '0';
  });
});

// Clear form after submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
