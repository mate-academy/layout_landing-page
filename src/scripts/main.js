'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.page__btn');
  const buttonMenu = document.querySelector('#button__menu');
  const buttonClose = document.querySelector('#button_close');
  const menuLinks = document.querySelectorAll('.nav__link');

  buttonClose.addEventListener('click', () => {
    document.body.style.overflow = '';
  });

  buttonMenu.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      document.body.style.overflow = '';
    });
  });

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('pressed');
    });
  });
});

document
  .getElementById('contact_form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    this.reset();
  });
