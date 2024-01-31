'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.icon--menu');
  const closeButton = document.querySelector('.icon--close');
  const navList = document.querySelector('.nav__list');
  const menu = document.querySelector('.menu');

  menuButton.addEventListener('click', function() {
    menu.style.display = 'flex';
  });

  closeButton.addEventListener('click', function() {
    menu.style.display = 'none';
  });

  navList.addEventListener('click', function() {
    menu.style.display = 'none';
  });
});
