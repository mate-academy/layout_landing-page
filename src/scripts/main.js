'use strict';

const page = document.querySelector('.page');
const menuOpener = document.querySelector('.icon--menu');
const menuCloser = document.querySelector('.icon--close');

menuOpener.addEventListener('click', function() {
  page.classList.add('no-scroll');
});

menuCloser.addEventListener('click', function() {
  page.classList.remove('no-scroll');
});
