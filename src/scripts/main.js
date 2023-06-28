'use strict';

const menu = document.querySelector('.menu');
const burgerMenu = document.querySelector('.header__burger-menu');
const html = document.querySelector('html');
const navLinkHeader = document.querySelectorAll('.nav__link');
const form = document.querySelector('.contact-us__form');
const logo = document.querySelector('.header__logo');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('header__burger-menu--active');
  menu.classList.toggle('menu--active');
  html.classList.toggle('block-scroll');
});

navLinkHeader.forEach((link) => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('menu--active')) {
      burgerMenu.classList.toggle('header__burger-menu--active');
      menu.classList.toggle('menu--active');
      html.classList.toggle('block-scroll');
    }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

logo.addEventListener('click', () => {
  if (menu.classList.contains('menu--active')) {
    burgerMenu.classList.remove('header__burger-menu--active');
    menu.classList.remove('menu--active');
    html.classList.remove('block-scroll');
  }
});
