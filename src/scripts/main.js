'use strict';

const burgerIcon = document.querySelector('.header__settings-burger');
const crossIcon = document.querySelector('.header__settings-crossMenu');

// const headerContainer = document.querySelector('.header__container');
const menu = document.querySelector('.header__menu');

burgerIcon.onclick = () => {
  menu.style.display = 'block';
};

crossIcon.onclick = () => {
  menu.style.display = 'none';
};
