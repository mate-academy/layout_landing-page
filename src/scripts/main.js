'use strict';

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});
