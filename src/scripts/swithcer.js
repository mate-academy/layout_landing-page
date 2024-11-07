'use strict';

const page = document.documentElement;
const switcher = document.querySelector('.theme-switcher');

switcher.addEventListener('click', () => {
  if (page.classList.contains('page--theme--dark')) {
    page.classList.remove('page--theme--dark');
    switcher.classList.remove('theme-switcher--theme--dark');
  } else {
    page.classList.add('page--theme--dark');
    switcher.classList.add('theme-switcher--theme--dark');
  }
});
