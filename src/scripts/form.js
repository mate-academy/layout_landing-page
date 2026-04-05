'use strict';

const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  form.reset();
});
