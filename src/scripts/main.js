'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.icon--menu');
  const closeButton = document.querySelector('.icon--close');
  const navList = document.querySelector('.nav__list');
  const menu = document.querySelector('.menu');

  menuButton.addEventListener('click', function() {
    menu.style.transform = 'translateY(0%)';
    menu.style.opacity = '1';
  });

  closeButton.addEventListener('click', function() {
    menu.style.transform = 'translateY(-100%)';
    menu.style.opacity = '0';
  });

  navList.addEventListener('click', function() {
    menu.style.transform = 'translateY(-100%)';
    menu.style.opacity = '0';
  });
});
