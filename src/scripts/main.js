'use strict';

const menuButtons = document.querySelectorAll('.trigger-nav--js');
const menu = document.querySelector('.header__opennav-nav');
const menuLinks = document.querySelectorAll('.header__opennav-nav-link');

menuButtons.forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    menu.classList.toggle('header__opennav-nav--active');
    document.body.classList.toggle('scroll-hidden');
  });
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('header__opennav-nav--active');
    document.body.classList.remove('scroll-hidden');
  });
});
