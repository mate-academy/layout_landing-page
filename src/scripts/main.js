'use strict';

const form = document.querySelector('.inputs');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
