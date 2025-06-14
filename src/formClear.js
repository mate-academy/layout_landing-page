'use strict';

const campName = document.querySelector(
  '.sectionMain__contactUs-contactUs-data-name'
);

const campEmail = document.querySelector(
  '.sectionMain__contactUs-contactUs-data-email'
);

const campMessage = document.querySelector(
  '.sectionMain__contactUs-contactUs-data-message'
);

const buttonSend = document.querySelector(
  '.sectionMain__contactUs-contactUs-data-send'
);

buttonSend.addEventListener('click', () => {
  campName.value = '';
  campEmail.value = '';
  campMessage.value = '';
});
