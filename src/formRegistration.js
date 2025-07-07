'use strict';

function forceTofillinEverything() {
  const name = document.querySelector(
    '.sectionMain__contactUs-contactUs-data-name'
  );
  const email = document.querySelector(
    '.sectionMain__contactUs-contactUs-data-email'
  );
  const message = document.querySelector(
    '.sectionMain__contactUs-contactUs-data-message'
  );

  if (name.value === '' || email.value === '' || message.value === '') {
    alert('Por favor, preencha todos os campos.');
    return false;
  }

  name.value = '';
  email.value = '';
  message.value = '';

  return false;
}
