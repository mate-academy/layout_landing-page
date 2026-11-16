'use strict';

const menu = document.getElementsByClassName('menu')[0];
const menuButton = document.getElementsByClassName('icon--menu')[0];
const closeButton = document.getElementsByClassName('icon--close')[0];
const menuListLinks = document.querySelectorAll('.menu__list-link');

menuButton.addEventListener('click', () => {
  menu.classList.add('menu--opened');
  document.body.classList.add('overflow--hidden');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('menu--opened');
  document.body.classList.remove('overflow--hidden');
});

menuListLinks.forEach((element) => {
  element.addEventListener('click', () => {
    menu.classList.remove('menu--opened');
    document.body.classList.remove('overflow--hidden');
  });
});
