'use strict';

import '../styles/main.scss';

const menu = document.querySelector('.page__menu');
const menuLinks = document.querySelectorAll('.menu__link');

const closeMenu = () => {
  window.location.hash = '';
};

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.matches(':target')) {
    closeMenu();
  }
});
