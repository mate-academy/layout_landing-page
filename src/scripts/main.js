'use strict';

let currentUrl = window.location.href;

const page = document.querySelector('.page');

document.addEventListener('click', () => {
  setTimeout(() => {
    currentUrl = window.location.href;

    if (currentUrl.includes('menu')) {
      page.classList.add('hide-scroll');
    } else {
      page.classList.remove('hide-scroll');
    }
  }, 0);
});
