'use strict';

const menu = document.getElementsByClassName('menu')[0];
const menuButton = document.getElementsByClassName('icon--menu')[0];
const closeButton = document.getElementsByClassName('icon--close')[0];

menuButton.addEventListener('click', () => {
  menu.classList.add('menu--opened');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('menu--opened');
});
