'use strict';

const menuOpenBtn = document.querySelector('.icon--menu');
const menuCloseBtn = document.querySelector('.icon--close');

menuOpenBtn.addEventListener('click', () => {
  document.body.classList.add('menu-open');
});

menuCloseBtn.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
});
