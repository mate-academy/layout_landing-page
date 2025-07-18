'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.icon--burger');
  const close = document.querySelector('.icon--close');
  const menu = document.querySelector('.page__menu');
  const body = document.body;

  if (burger && menu && close) {
    burger.addEventListener('click', () => {
      menu.classList.add('menu--active');
      body.classList.add('page--menu-open');
    });

    close.addEventListener('click', () => {
      menu.classList.remove('menu--active');
      body.classList.remove('page--menu-open');
    });
  }
});
