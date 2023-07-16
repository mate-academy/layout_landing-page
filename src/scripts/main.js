'use strict';

const html = document.querySelector('html');

document.querySelector('.icon--burger').addEventListener('click', () => {
  html.classList.toggle('unscroll');
});

document.querySelector('.icon--close').addEventListener('click', () => {
  html.classList.toggle('unscroll');
});
