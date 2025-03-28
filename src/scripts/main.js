'use strict';

document
  .querySelector('.main__contacts__form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const button = document.querySelector('.main__contacts__form__button');

    button.textContent = 'Form submitted';
    button.style.backgroundColor = 'green';

    this.reset();
  });
