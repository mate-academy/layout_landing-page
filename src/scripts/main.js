'use strict';

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
  if (!form.checkValidity()) {
    return;
  }
  event.preventDefault();

  form.reset();
});
