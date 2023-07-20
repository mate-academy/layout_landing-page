'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputs = form.querySelectorAll('input, textarea');

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
});
