'use strict';

const menuButton = document.querySelector('.icon--menu');

menuButton.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
})


const closeButton = document.querySelector('.icon--close');

closeButton.addEventListener('click', () => {
  document.body.style.overflow = '';
})
