'use strict';

const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
