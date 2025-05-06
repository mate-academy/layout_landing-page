'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.icon--menu');
  const close = document.querySelector('.icon--close');
  const menu = document.getElementById('menu');

  burger.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.add('menu--active');
  });

  close.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.remove('menu--active');
  });
});