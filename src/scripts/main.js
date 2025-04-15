'use strict';

const phoneIcon = document.querySelector('.nav__icon--phone');
const phoneList = document.querySelector('.phone__items');

phoneIcon.addEventListener('mouseenter', () => {
  phoneList.classList.remove('hidden');
});

phoneIcon.addEventListener('mouseleave', () => {
  phoneList.classList.add('hidden');
});

const burgerIcon = document.querySelector('.nav__icon--burger');

burgerIcon.addEventListener('click', () => {
  document.querySelector('.hero').classList.toggle('hidden');
});
