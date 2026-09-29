'use strict';

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.header__menu-button');

const closeButton = document.querySelector('.menu__close');

const menuLinks = document.querySelectorAll('.menu__link');

const openMenu = () => {
  menu.classList.add('is-open');

  menu.setAttribute('aria-hidden', 'false');

  menuButton.setAttribute('aria-expanded', 'true');
};

const closeMenu = () => {
  menu.classList.remove('is-open');

  menu.setAttribute('aria-hidden', 'true');

  menuButton.setAttribute('aria-expanded', 'false');
};

menuButton.addEventListener('click', openMenu);

closeButton.addEventListener('click', closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
