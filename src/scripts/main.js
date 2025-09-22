'use strict';

const menuButtons = document.querySelectorAll('.trigger-nav--js');
const menu = document.querySelector('.header__opennav-nav');

menuButtons.forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    menu.classList.toggle('header__opennav-nav--active');
    document.body.classList.toggle('scroll-hidden');
  });
});
