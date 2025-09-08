'use strict';

const menuTrigger = document.querySelector('.icon--menu');
const menuClose = document.querySelector('.menu__close');
const bodyEl = document.body;

menuTrigger.addEventListener('click', () => {
  bodyEl.classList.add('menu-open');
});

menuClose.addEventListener('click', () => {
  bodyEl.classList.remove('menu-open');
});
