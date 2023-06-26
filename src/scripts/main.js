'use strict';

const form = document.getElementById('contact-form');

function submitForm(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submitForm);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
