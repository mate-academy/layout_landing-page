'use strict';

const menu = document.querySelector('.menu');
const burgerMenu = document.querySelector('.header__burger-menu');
const html = document.querySelector('html');
const navLinkHeader = document.querySelectorAll('.nav__link');
const form = document.querySelector('.contact-us__form');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('header__burger-menu--active');
  menu.classList.toggle('menu--active');
  html.classList.toggle('block-scroll');
});

navLinkHeader.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu.classList.toggle('header__burger-menu--active');
    menu.classList.toggle('menu--active');
    html.classList.toggle('block-scroll');
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
