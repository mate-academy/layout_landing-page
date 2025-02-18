'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scrol');
  } else {
    document.body.classList.remove('page__body--no-scrol');
  }
});

const form = document.getElementById('form');
const text = document.getElementById('text');
const mail = document.getElementById('mail');
const textarea = document.getElementById('textarea');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  text.value = '';
  mail.value = '';
  textarea.value = '';
});
