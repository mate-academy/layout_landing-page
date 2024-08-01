'use strict';

const burgerIcon = document.querySelector('.header__settings-burger');
const crossIcon = document.querySelector('.header__settings-crossMenu');
const phoneIcon = document.querySelector('.header__settings-phone');
const navLinks = document.querySelectorAll('.nav__link');

const number = document.querySelector('.header__settings-number');
const menu = document.querySelector('.header__menu');
const html = document.documentElement;

burgerIcon.onclick = () => {
  menu.style.display = 'block';
  html.classList.add('no-scroll');
};

navLinks.forEach((link) => {
  link.onclick = () => {
    menu.style.display = 'none';
    html.classList.remove('no-scroll');
  };
});

navLink.onclick = () => {
  menu.style.display = 'none';
  html.classList.remove('no-scroll');
  console.log('что-нибудь!!!!');
};

phoneIcon.onmouseover = () => {
  number.style.display = 'block';
};

phoneIcon.onmouseout = () => {
  number.style.display = 'none';
};
