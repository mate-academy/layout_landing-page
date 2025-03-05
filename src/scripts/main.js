'use strict';

const html = document.querySelector('html');

document.querySelector('.icon--burger').addEventListener('click', () => {
  html.classList.toggle('unscroll');
});

document.querySelector('.nav__list').addEventListener('click', () => {
  html.classList.toggle('unscroll');
});
