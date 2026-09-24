'use strict';

const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__hero__menu');
const closeButton = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__link, .menu__btn');

function toggleMenu(isOpen) {
  menu.classList.toggle('menu--open', isOpen);
  document.body.classList.toggle('no-scroll', isOpen);
}

burger.addEventListener('click', () => toggleMenu(true));
closeButton.addEventListener('click', () => toggleMenu(false));
menuLinks.forEach((link) => {
  link.addEventListener('click', () => toggleMenu(false));
});


const form = document.querySelector('.contacts__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
