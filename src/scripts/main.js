'use strict';

let currentUrl = window.location.href;

const page = document.querySelector('.page');

document.addEventListener('click', () => {
  currentUrl = window.location.href;

  if (currentUrl.includes('menu')) {
    page.classList.remove('hide-scroll');
  } else {
    page.classList.add('hide-scroll');
  }
});
