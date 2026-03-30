'use strict';

const burgerBtn = document.querySelector('.icon--menu');
const closeBtn = document.querySelector('.menu--close');
const menu = document.querySelector('.menu');
const menuLogo = document.querySelector('.menu__logo');
const body = document.body;

burgerBtn.addEventListener('click', () => {
  menu.classList.add('menu--open');
  body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('menu--open');
  body.style.overflow = 'visible';
});

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu--open');
    body.style.overflow = 'visible';

    menu.classList.remove('menu--open');
  });
});

menuLogo.addEventListener('click', () => {
  menu.classList.remove('menu--open');
});
