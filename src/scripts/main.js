'use strict';

const phoneIcon = document.querySelector('.icon--phone');
const number = document.querySelector('.icon__number');
const topBar = document.querySelector('.top-bar');

phoneIcon.addEventListener('mouseenter', () => {
  number.classList.add('is-visible');
});

topBar.addEventListener('mouseleave', () => {
  number.classList.remove('is-visible');
});
