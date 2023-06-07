'use strict';

const page = document.querySelector('.page');
const logoLink = document.querySelector('.top-bar__logo-link');

logoLink.addEventListener('click', function(e) {
  e.preventDefault();
  page.classList.toggle('page--theme--dark');
});
