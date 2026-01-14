'use strict';

const SCROLL_THRESHOLD = 50;
const MENU_CLOSE_CLASS = 'menu--close';
const SCROLLED_CLASS = 'scrolled';

const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__header__icon--close');
const menuOpen = document.querySelector('.nav__icon--menu');
const navbar = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.menu__links__link');
const contactLinks = document.querySelectorAll('.contacts a');

function preventScroll() {
  document.body.style.overflow = 'hidden';
}

function allowScroll() {
  document.body.style.overflow = '';
}

function openMenu() {
  menu.classList.remove(MENU_CLOSE_CLASS);
  preventScroll();
}

function closeMenu() {
  menu.classList.add(MENU_CLOSE_CLASS);
  allowScroll();
}

menuOpen.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);

[...menuLinks, ...contactLinks].forEach((link) => {
  link.addEventListener('click', closeMenu);
});

window.addEventListener('scroll', () => {
  if (window.scrollY > SCROLL_THRESHOLD) {
    navbar.classList.add(SCROLLED_CLASS);
  } else {
    navbar.classList.remove(SCROLLED_CLASS);
  }
});
