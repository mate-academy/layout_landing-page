'use strict';

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  form.reset();
});
