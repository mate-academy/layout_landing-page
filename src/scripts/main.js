'use strict';

const page = document.querySelector('.page');
const logoLink = document.querySelector('.theme-switcher');

logoLink.addEventListener('click', function(e) {
  e.preventDefault();
  page.classList.toggle('page--theme--dark');
});
