'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const phone = document.getElementById('icon-phone');
const headerContacts = document.getElementById('header-contacts');

phone.addEventListener('mouseover', () => {
  headerContacts.classList.add('header__contacts--active');
});

phone.addEventListener('mouseleave', () => {
  const timeout = setTimeout(() => {
    headerContacts.classList.remove('header__contacts--active');
  }, 300);

  headerContacts.addEventListener('mouseover', () => {
    clearTimeout(timeout);
  });
});

headerContacts.addEventListener('mouseleave', () => {
  headerContacts.classList.remove('header__contacts--active');
});

const form = document.getElementById('contacts-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
