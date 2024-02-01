'use strict';

document.addEventListener('DOMContentLoaded', () => {
  toglleMenu();
});

const toglleMenu = () => {
  const menuToggle = document.querySelector('.header .header__buttons-toggle');
  const body = document.querySelector('body');
  const menuNav = document.querySelector('#menu');
  const allLinks = document.querySelectorAll('.menu .link-hovered');

  if (!menuToggle) {
    return;
  }

  menuToggle.addEventListener('click', el => {
    closeMenu(body, menuNav, menuToggle);
  });

  allLinks.forEach(element => {
    element.addEventListener('click', el => {
      closeMenu(body, menuNav, menuToggle);
    });
  });
};

const closeMenu = (body, menuNav, menuToggle) => {
  body.classList.toggle('body--fixed');
  menuNav.classList.toggle('menu--active');
  menuToggle.classList.toggle('header__buttons-toggle--active');
};
