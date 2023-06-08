'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with--menu');
  } else {
    document.body.classList.remove('page__body--with--menu');
  }
});

const form = document.getElementsByClassName('form')[0];

form.addEventListener('submit', (event) => {
  form.reset();
  event.preventDefault();
});
