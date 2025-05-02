'use strict';

const hamburger = document.querySelector('.header__burger');
const header = document.querySelector('.header');

hamburger.addEventListener('click', () => {
  if (!hamburger.classList.contains('active')) {
    hamburger.classList.add('reset');

    setTimeout(() => {
      hamburger.classList.remove('reset');
      hamburger.classList.add('active');
      header.classList.add('active');
    }, 400);
  } else {
    hamburger.classList.remove('active');
    header.classList.remove('active');
  }
});
