'use strict';

const headerTop = document.querySelector('.header__top');
const phoneIcon = document.querySelector('.icon--phone');
const phoneNumbers = document.querySelector('.phone-numbers');
const phoneList = document.querySelector('.phone-numbers__list');
const menuID = document.getElementById('phone-menu');

window.addEventListener('hashchange', () => {
  if (menuID.matches(':target')) {
    headerTop.classList.add('header__top--hidden');
  } else {
    headerTop.classList.remove('header__top--hidden');
  }
});

phoneIcon.addEventListener('mouseenter', () => {
  phoneNumbers.classList.remove('top-bar__phone-numbers--hidden');
});

phoneIcon.addEventListener('mouseleave', () => {
  phoneNumbers.classList.add('top-bar__phone-numbers--hidden');
});

phoneList.addEventListener('mouseenter', () => {
  phoneNumbers.classList.remove('top-bar__phone-numbers--hidden');
});

phoneList.addEventListener('mouseleave', () => {
  phoneNumbers.classList.add('top-bar__phone-numbers--hidden');
});
