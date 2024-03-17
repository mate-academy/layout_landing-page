'use strict';

const contactsForm = document.querySelector('.contacts__form');

contactsForm.addEventListener('click', (e) => {
  e.preventDefault();
  contactsForm.reset();
});
