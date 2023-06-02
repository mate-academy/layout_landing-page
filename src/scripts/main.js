'use strict';

const page = document.querySelector('.page');
const iconMenu = page.querySelector('.top-bar__icons-menu');
const closeMenu = page.querySelector('.menu__content-top-close');

iconMenu.addEventListener('click', (event) => {
  event.preventDefault();

  page.classList.toggle('page--menu-active');
});

closeMenu.addEventListener('click', (event) => {
  event.preventDefault();

  page.classList.toggle('page--menu-active');
});

const sub = document.querySelector('.contacts');
const form = sub.querySelector('.contact');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});
