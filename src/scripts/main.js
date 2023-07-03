'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page__body--with-nav');
  } else {
    document.body.classList.remove('page__body--with-nav');
  }
});

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('header--scroll');
  } else {
    header.classList.remove('header--scroll');
  }
});

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.reset();
});
