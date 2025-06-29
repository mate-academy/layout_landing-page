'use strict';

const form = document.getElementById('form');
const campName = document.querySelector(
  '.sectionMain__contactUs-contactUs-data-name'
);
const campEmail = document.querySelector(
  '.sectionMain__contactUs-contactUs-data-email'
);
const campMessage = document.querySelector(
  '.sectionMain__contactUs-contactUs-data-message'
);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (
    campName.value !== '' ||
    campEmail.value !== '' ||
    campMessage.value !== ''
  ) {
    campName.value = '';
    campEmail.value = '';
    campMessage.value = '';
  }
});
