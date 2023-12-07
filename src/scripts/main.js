'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page__content--with-nav');
  } else {
    document.body.classList.remove('page__content--with-nav');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  form.reset();
});
