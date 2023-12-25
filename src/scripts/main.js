'use strict';

const page = document.querySelector('.page');
const menu = page.querySelector('.icon--menu');
const closeMenu = page.querySelector('.icon--close');

menu.addEventListener('click', () => {
  page.classList.add('page--hidden');
});

closeMenu.addEventListener('click', () => {
  page.classList.remove('page--hidden');
});
