'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contacts__form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
