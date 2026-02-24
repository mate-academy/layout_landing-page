/* eslint-disable prettier/prettier */
'use strict';

console.log('script works');

const burgerMenu = document.querySelector('.burger');
const burgerButtonOpen = document.querySelector(
  '.header__buttons-burger-button',
);

const burgerButtonClose = document.querySelector(
  '.header__buttons-burger-button-open',
);
const burgerLinks = document.querySelectorAll('.burger__nav-link');

burgerButtonOpen.addEventListener('click', () => {
  burgerMenu.classList.add('open');
  document.body.classList.add('body--lock');
});

burgerButtonClose.addEventListener('click', () => {
  burgerMenu.classList.remove('open');
  document.body.classList.remove('body--lock');
});

burgerLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('open');
    document.body.classList.remove('body--lock');
  });
});
