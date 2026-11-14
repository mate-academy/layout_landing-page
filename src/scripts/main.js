'use strict';

const body = document.querySelector('body');
const topBarPhones = document.querySelector('.top-bar__phones');
const phoneButton = document.querySelector('.icon--phone');

phoneButton.addEventListener('click', function () {
  topBarPhones.classList.toggle('show-phones');
});

body.addEventListener('click', function (e) {
  if (!e.target.closest('.top-bar__icons')) {
    topBarPhones.classList.remove('show-phones');
  }
});
