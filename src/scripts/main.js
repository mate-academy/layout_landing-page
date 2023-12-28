'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const formNotReset = document.getElementById('form');

formNotReset.addEventListener('submit', (event) => {
  event.preventDefault();
  formNotReset.reset();
});
