'use strict';

const page = document.querySelector('.page');
const menuOpener = document.querySelector('.icon--menu');
const menuCloser = document.querySelector('.icon--close');
const menuLinks = document.querySelectorAll('.nav__link');
const logos = document.querySelectorAll('.top-bar__logo');
const menuLogo = logos[1];

menuOpener.addEventListener('click', function() {
  page.classList.add('no-scroll');
});

menuCloser.addEventListener('click', function() {
  page.classList.remove('no-scroll');
});

menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    page.classList.remove('no-scroll');
  });
});

menuLogo.addEventListener('click', function() {
  page.classList.remove('no-scroll');
});
