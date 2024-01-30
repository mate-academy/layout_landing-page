'use strict';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello World!');
  toglleMenu();
});

const toglleMenu = () => {
  const menuToggle = document.querySelector('.header .header__buttons-toggle');
  const body = document.querySelector('body');
  const menuNav = document.querySelector('#menu');

  if (!menuToggle) {
    return;
  }

  menuToggle.addEventListener('click', el => {
    body.classList.toggle('body--fixed');
    menuNav.classList.toggle('menu--active');
    menuToggle.classList.toggle('header__buttons-toggle--active');
  });
};
