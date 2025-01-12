'use strict';

const contactsForm = document.querySelector('#contacts-form');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

contactsForm.addEventListener('submit', submitReload, false);

function submitReload(event) {
  event.preventDefault();
  contactsForm.reset();
}
