'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-us__form');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  }
});
