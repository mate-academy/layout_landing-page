'use strict';
import '../styles/main.scss';

const menuButton = document.querySelector('.header__menu');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__link');

menuButton.addEventListener('click', () => {
  menu.classList.add('is-open');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('is-open');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    menu.classList.remove('is-open');
  }
});
