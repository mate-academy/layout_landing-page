'use strict';

const page = document.querySelector('.page');
const switcher = document.querySelector('.theme-switcher');

switcher.addEventListener('click', function(e) {
  e.preventDefault();
  page.classList.toggle('page--theme--dark');

  switcher.classList.add('animated');
  setTimeout(() => switcher.classList.remove('animated'), 1000);
});
