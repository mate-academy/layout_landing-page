'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.icon--menu');
  const closeButton = document.querySelector('.icon--close');
  const navList = document.querySelector('.nav__list');
  const menu = document.querySelector('.menu');

  menuButton.addEventListener('click', function() {
    menu.classList.add('is-open');
  });

  closeButton.addEventListener('click', function() {
    menu.classList.remove('is-open');
  });

  navList.addEventListener('click', function() {
    menu.classList.remove('is-open');
  });
});
