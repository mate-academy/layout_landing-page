'use strict';

const page = document.querySelector('.page');
const menu = page.querySelector('.page__menu');
const header = page.querySelector('.header');
const openMenu = header.querySelector('.icon--button');
const closeMenu = menu.querySelector('.icon--button');
const navLink = menu.querySelectorAll('.menu__link');

openMenu.addEventListener('click', () => {
  if (menu.classList.contains('page__menu--active') === false) {
    menu.classList.add('page__menu--active');
  }
});

closeMenu.addEventListener('click', () => {
  if (menu.classList.contains('page__menu--active')) {
    menu.classList.remove('page__menu--active');
  }
});

navLink.forEach((item) => {
  item.addEventListener('click', () => {
    if (menu.classList.contains('page__menu--active')) {
      menu.classList.remove('page__menu--active');
    }
  });
});
