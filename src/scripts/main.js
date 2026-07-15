'use strict';

const form = document.querySelector('.contacts__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();

    return;
  }

  form.reset();
});
