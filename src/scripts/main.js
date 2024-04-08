'use strict';

const body = document.querySelector('body');
const menuIcon = document.querySelector('.icon--menu');
const menuCloseIcon = document.querySelector('.icon--close');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', function() {
  body.classList.add('no-scroll');
  menu.classList.add('open');
});

menuCloseIcon.addEventListener('click', function() {
  body.classList.remove('no-scroll');
  menu.classList.remove('open');
});
