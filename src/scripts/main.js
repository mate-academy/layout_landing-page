'use strict';

const menuIcon = document.body.querySelector('.header__menuSvg');
const nav = document.body.querySelector('.navigation');
const body = document.querySelector('#body');
const form = document.querySelector('#feedback');

document.body.addEventListener('click', (event) => {
  if (event.target === menuIcon) {
    nav.style['pointer-events'] = 'all';
    nav.style.opacity = 1;
    nav.style['z-index'] = 10;
    body.style.overflow = 'hidden';
  }

  if (event.target !== menuIcon) {
    nav.style['pointer-events'] = 'none';
    nav.style.opacity = 0;
    body.style.overflow = 'auto';

    setTimeout(() => {
      nav.style['z-index'] = -10;
    }, 500);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
