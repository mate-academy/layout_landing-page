'use strict';

const menu = document.getElementById('menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const menuLinks = document.querySelectorAll('.menu__link');

menuOpen.addEventListener('click', () => {
  menu.classList.add('menu--open');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('menu--open');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu--open');
  });
});
