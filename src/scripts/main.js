'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const button = document.querySelector('#submit');
const form = document.querySelector('.form');

button.addEventListener('click', function(event) {
  event.preventDefault();

  const result = form.reportValidity();

  if (result === true) {
    form.reset();
  }
}, false);
