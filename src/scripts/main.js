'use strict';

const body = document.body;
const menu = document.querySelector('#menu');
const openBtn = document.querySelector('.icon--menu');
const closeBtn = document.querySelector('.icon--close');
const menuLinks = document.querySelectorAll('.nav__link');

openBtn.addEventListener('click', function () {
  body.classList.add('is-locked');
});

closeBtn.addEventListener('click', function () {
  body.classList.remove('is-locked');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    body.classList.remove('is-locked');
  });
});
