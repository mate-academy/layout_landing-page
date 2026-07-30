'use strict';

const contactsForm = document.getElementById('contacts-form');

contactsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  contactsForm.reset();
});
