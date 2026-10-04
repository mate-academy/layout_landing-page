'use strict';

const menu = document.querySelector('.page__menu');
const menuLinks = document.querySelectorAll('.menu__link, .menu__close');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menu) {
      menu.scrollTop = 0;
    }
  });
});
