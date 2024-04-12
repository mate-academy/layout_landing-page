'use strict';

const menu = document.querySelector('.burger__logo');
const body = document.querySelector('body');
const navItem = document.querySelectorAll(".burger__nav-LIst-Item");

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('overflow-hidden');

  
});

navItem.forEach(elem => elem.addEventListener('click', () => {
  menu.classList.remove('active');
  body.classList.remove('overflow-hidden');
}))

