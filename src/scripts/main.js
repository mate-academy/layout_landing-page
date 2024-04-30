'use strict';

const menuButton = document.querySelector('.icon--menu');

menuButton.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
});

const closeButton = document.querySelector('.icon--close');

closeButton.addEventListener('click', () => {
  document.body.style.overflow = '';
});

const menuLinks = document.querySelectorAll('.nav__link');

for (let i = 1; i <= 5; i++) {
  menuLinks[i].addEventListener('click', () => {
    document.body.style.overflow = '';
  });
}
