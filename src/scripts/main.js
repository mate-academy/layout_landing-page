'use strict';

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();

    return;
  }

  form.reset();
});
