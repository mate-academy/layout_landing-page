'use strict';

/*
// Phone-bar
const phoneBtn = document.querySelector('.header__phone-btn');
const phoneLink = document.querySelector('.header__phone');

phoneBtn.addEventListener('click', () => {
  if (phoneLink.classList.contains('header__phone--active')) {
    phoneLink.classList.remove('header__phone--active');
  } else {
    phoneLink.classList.add('header__phone--active');
  }
});
*/

// Menu-burger
const menuBtn = document.querySelector('.header__menu-btn');
const menuCloseBtn = document.querySelector('.nav__close');
const navMenu = document.querySelector('.header__nav');

menuBtn.addEventListener('click', () => {
  navMenu.classList.add('header__nav--active');
});

menuCloseBtn.addEventListener('click', () => {
  navMenu.classList.remove('header__nav--active');
});
