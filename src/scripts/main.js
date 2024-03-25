'use strict';

const page = document.documentElement;
const menu = document.querySelector('.header__link--menu');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    page.classList.add('page__menu-active');
  } else {
    page.classList.remove('page__menu-active');
  }
});

// menu.addEventListener('click', () => {
//   page.classList.add('page__menu-active');
// });

// menuClose.addEventListener('click', () => {
//   page.classList.remove('page__menu-active');
// });
