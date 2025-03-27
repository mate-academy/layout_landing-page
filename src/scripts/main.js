'use strict';

const page = document.querySelector('.page');

document.querySelector('.icon--menu').addEventListener('click', () => {
  page.classList.add('page--no-scroll');
});

document.querySelector('.icon--close').addEventListener('click', () => {
  page.classList.remove('page--no-scroll');
});

const logoItems = document.querySelectorAll('.top-bar__logo-link');

const secondLogoItem = logoItems[1];

secondLogoItem.addEventListener('click', () => {
  page.classList.remove('page--no-scroll');
});

const navItems = document.querySelectorAll('.nav__link');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    page.classList.remove('page--no-scroll');
  });
});
