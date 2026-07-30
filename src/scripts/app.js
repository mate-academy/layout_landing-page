'use strict';

const page = document.querySelector('.main');

const openMenu = document.querySelector('.icon--menu');
const closeMenu = document.querySelector('.icon--close');

openMenu.addEventListener('click', () => {
  page.classList.add('page--menu-open');
});

closeMenu.addEventListener('click', () => {
  page.classList.remove('page--menu-open');
});
