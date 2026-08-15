'use strict';

const contactForm = document.querySelector('.contacts__form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  contactForm.reset();
});
