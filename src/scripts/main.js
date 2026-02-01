'use strict';

const header = document.querySelector('.header');

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 10);
  });
}

const menuButton = document.querySelector('.header__menu');
const aside = document.querySelector('.aside');
const asideButton = document.querySelector('.nav__menu-close');
const page = document.querySelector('.page');

if (menuButton && aside && page) {
  menuButton.addEventListener('click', () => {
    aside.classList.toggle('aside--open');
    page.classList.toggle('page--menu-active');
  });
}

if (asideButton && aside) {
  asideButton.addEventListener('click', () => {
    aside.classList.remove('aside--open');
    page.classList.remove('page--menu-active');
  });
}

aside.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    aside.classList.remove('aside--open');
    page.classList.remove('page--menu-active');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    aside.classList.remove('aside--open');
    page.classList.remove('page--menu-active');
  }
});
