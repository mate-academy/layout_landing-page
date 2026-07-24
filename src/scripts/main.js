'use strict';

const form = document.querySelector('.contact__form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();

      return;
    }

    form.reset();
  });
}
