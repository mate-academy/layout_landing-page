'use strict';

import '../styles/style.scss';

const form = document.getElementById('contacts-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (form.checkValidity()) {
    form.reset();
  } else {
    form.reportValidity();
  }
});
