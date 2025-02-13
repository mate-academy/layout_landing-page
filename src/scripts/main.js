'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.page__btn');
  const buttonMenu = document.querySelector('#button__menu');
  const buttonClose = document.querySelector('#button_close');

  buttonClose.addEventListener('click', () => {
    document.body.style.overflow = '';
  });

  buttonMenu.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
  });

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('pressed');
    });
  });
});
