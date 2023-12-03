'use strict';

window.addEventListener('hashchange', () => {
  if (window.innerWidth > 1100) {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }

  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const formfieldElement = document.getElementById('formfield');
const nameInputElement = document.getElementById('formfield-name');
const emailInputElement = document.getElementById('formfield-email');
const messageInputElement = document.getElementById('formfield-massage');

formfieldElement.addEventListener('submit', (event) => {
  event.preventDefault();

  nameInputElement.value = '';
  emailInputElement.value = '';
  messageInputElement.value = '';

  window.alert('Sent successfully!');
});
