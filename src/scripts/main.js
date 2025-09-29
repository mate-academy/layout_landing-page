'use strict';

const body = document.querySelector('body');
const phoneNumber = document.querySelector('.extra_nav__call');
const burgerMenu = document.querySelector('.extra_nav__burger_menu');
const nav = document.querySelector('nav');
const phoneNumberInner = document.querySelector('.extra_nav__call_number');

phoneNumber.addEventListener('click', () => {
  phoneNumberInner.classList.toggle('extra_nav__call_number--active');
});

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('extra_nav__burger_menu--active');

  nav.classList.toggle('nav_open');

  body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
});
