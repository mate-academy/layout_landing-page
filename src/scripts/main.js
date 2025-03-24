'use strict';

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.icon--menu');
const menuCloseButton = document.querySelector('.icon--close');

menuButton.addEventListener('click', () => {
  menu.classList.add('menu--open');
});

menuCloseButton.addEventListener('click', () => {
  menu.classList.remove('menu--open');
});
