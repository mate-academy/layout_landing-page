'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--width-menu');
  } else {
    document.body.classList.remove('page__body--width-menu');
  }
});
