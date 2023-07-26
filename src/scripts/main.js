'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
  });
});
