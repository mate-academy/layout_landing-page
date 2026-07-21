'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menuLinks = document.querySelectorAll('.menu__link, .menu__cta');

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.checked = false;
    });
  });

  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      contactForm.reset();
    });
  }
});
