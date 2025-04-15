'use strict';

const menu = document.querySelector('.menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('.main');

const phoneIcon = document.querySelector('.nav__icon--phone');
const burgerIcon = document.querySelector('.nav__icon--burger');
const closeIcon = document.querySelector('.nav__icon--close');

const phoneList = document.querySelector('.phone__items');

phoneIcon.addEventListener('mouseenter', () => {
  phoneList.classList.remove('hidden');
});

phoneIcon.addEventListener('mouseleave', () => {
  phoneList.classList.add('hidden');
});

burgerIcon.addEventListener('click', () => {
  menu.classList.remove('is-hidden');
  menu.classList.add('is-visible');

  hero.classList.add('is-hidden');
  hero.classList.remove('is-visible');

  setTimeout(() => {
    hero.classList.add('hidden');
    main.classList.add('hidden');
    menu.classList.remove('hidden');
  }, 300);
});

closeIcon.addEventListener('click', () => {
  menu.classList.remove('is-visible');
  menu.classList.add('is-hidden');

  hero.classList.remove('is-hidden');
  hero.classList.add('is-visible');

  setTimeout(() => {
    menu.classList.add('hidden');
    hero.classList.remove('hidden');
    main.classList.remove('hidden');
  }, 300);
});
