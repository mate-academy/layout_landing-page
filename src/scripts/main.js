'use strict';

import '../styles/main.scss';

const contactForm = document.querySelector('.footer__form');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  contactForm.reset();
});
