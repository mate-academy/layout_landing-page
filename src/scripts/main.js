'use strict';

const contactForm = document.querySelector('#contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  contactForm.reset();
});
