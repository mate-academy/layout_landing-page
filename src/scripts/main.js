'use strict';

/* eslint-env browser */

const contactsForm = document.querySelector('.contacts__form');
const loginForm = document.querySelector('.login__form');
const createAccount = document.querySelector('.create__account a');
const changePassword = document.querySelector('.change__password');

contactsForm?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Your message has been sent successfully!');
});

loginForm?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('This is DEMO login page!');
});

createAccount?.addEventListener('click', function (e) {
  e.preventDefault();
  alert('This is DEMO login page. You still cannot create a new account!');
});

changePassword?.addEventListener('click', function (e) {
  e.preventDefault();
  alert('This is DEMO login page. You are not really able to change password!');
});
