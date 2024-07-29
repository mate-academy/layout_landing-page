'use strict';

const burgerIcon = document.querySelector('.header__settings-burger');
const crossIcon = document.querySelector('.header__settings-crossMenu');
const phoneIcon = document.querySelector('.header__settings-phone');
const number = document.querySelector('.header__settings-number');
const menu = document.querySelector('.header__menu');

burgerIcon.onclick = () => {
  menu.style.display = 'block';
};

crossIcon.onclick = () => {
  menu.style.display = 'none';
};

phoneIcon.onmouseover = () => {
  number.style.display = 'block';
};

phoneIcon.onmouseout = () => {
  number.style.display = 'none';
};
