'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.icon--burger');
  const menu = document.getElementById('menu');
  const close = document.querySelector('.icon--close');

  if (burger && menu && close) {
    burger.addEventListener('click', () => {
      menu.classList.add('menu--active');
    });

    close.addEventListener('click', () => {
      menu.classList.remove('menu--active');
    });
  } else {
    // console.error('Burger or menu or close button not found!');
  }
});
