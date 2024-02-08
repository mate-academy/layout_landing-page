'use strict';

const burgerIcon = document.querySelector('.burgerIcon');
const burgerMenu = document.querySelector('.burgerMenu');
// const burgerMenuCloseIcon = document.querySelector('.burgerMenuCloseIcon');

burgerIcon.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  burgerIcon.classList.toggle('close');
});

// burgerMenuCloseIcon.addEventListener('click', () => {
//   burgerMenu.classList.toggle('open');
// });
