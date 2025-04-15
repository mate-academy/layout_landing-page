'use strict';

const menu = document.querySelector('.menu');

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

const notMenuBlock = Array.from(document.getElementById('app').children).filter(
  (el) => !el.classList.contains('menu'),
);

burgerIcon.addEventListener('click', () => {
  menu.classList.remove('transition');

  notMenuBlock.forEach((el) => el.classList.add('transition'));

  setTimeout(() => {
    menu.classList.remove('hidden');
    notMenuBlock.forEach((el) => el.classList.add('hidden'));
  }, 300);
});

closeIcon.addEventListener('click', () => {
  menu.classList.add('transition');
  notMenuBlock.forEach((el) => el.classList.remove('transition'));

  setTimeout(() => {
    menu.classList.add('hidden');
    notMenuBlock.forEach((el) => el.classList.remove('hidden'));
  }, 300);
});
