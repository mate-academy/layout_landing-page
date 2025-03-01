'use strict';

const body = document.body;
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.top-bar__burger');
const menuClose = document.querySelector('.menu__close');
const navMenu = menu.querySelector('.nav-menu');
const menuTopBarLogo = menu.querySelector('.top-bar__logo');
const navMenuLinks = navMenu.querySelectorAll(
  '.nav-menu__link',
);

menuOpen.addEventListener('click', () => {
  menu.classList.add('menu--active');
  body.classList.add('no-scroll');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('menu--active');
  body.classList.remove('no-scroll');
});

menuTopBarLogo.addEventListener('click', () => {
  menu.classList.remove('menu--active');
  body.classList.remove('no-scroll');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('header--scroll');
  } else {
    header.classList.remove('header--scroll');
  }
});

navMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu--active');
    body.classList.remove('no-scroll');
  });
});
