'use strict';

const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close');
const menuLinks = document.querySelectorAll('.menu__link');


menuButton.addEventListener('click', () => {
  menu.style.display = 'flex';
});

menuClose.addEventListener('click', () => {
  menu.style.display = 'none';
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.style.display = 'none';
  });
});
