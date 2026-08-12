'use strict';

// Selecioando elementos HTML.
const burger = document.querySelector('.header__burger');
const menuLateralOpen = document.querySelector('.menu');
const close = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__items');
const sidebar = document.querySelector('.menu');

// Buttons to open and close the sidebar.
burger.addEventListener('click', () => {
  menuLateralOpen.classList.toggle('menu--open');
});

close.addEventListener('click', () => {
  menuLateralOpen.classList.toggle('menu--open');
});

// Closing the side menu when user clicks on link.
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('menu--open');
  });
});
