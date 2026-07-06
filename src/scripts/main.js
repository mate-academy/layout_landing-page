'use strict';

const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('.icon--burger');
const closeButton = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__link');
const contactForm = document.querySelector('.contact__form');
const phoneWrapper = document.querySelector('.header__phone-wrapper');
const phoneButton = document.querySelector('.icon--phone');
const contactTextarea = document.querySelector('.contact__textarea');

if (phoneWrapper && phoneButton) {
  const closePhoneContacts = () => {
    phoneWrapper.classList.remove('is-open');
    phoneButton.setAttribute('aria-expanded', 'false');
  };

  phoneButton.addEventListener('click', (event) => {
    event.preventDefault();

    const shouldOpen = !phoneWrapper.classList.contains('is-open');

    phoneWrapper.classList.toggle('is-open', shouldOpen);
    phoneButton.setAttribute('aria-expanded', String(shouldOpen));
  });

  document.addEventListener('click', (event) => {
    if (!phoneWrapper.contains(event.target)) {
      closePhoneContacts();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closePhoneContacts();
    }
  });
}

if (menu && burgerButton && closeButton) {
  const toggleMenu = (shouldOpen) => {
    menu.classList.toggle('is-open', shouldOpen);
    menu.setAttribute('aria-hidden', String(!shouldOpen));
    burgerButton.setAttribute('aria-expanded', String(shouldOpen));
    document.body.classList.toggle('body--menu-open', shouldOpen);
  };

  burgerButton.addEventListener('click', () => toggleMenu(true));
  closeButton.addEventListener('click', () => toggleMenu(false));

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      toggleMenu(false);
    }
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();

      return;
    }

    contactForm.reset();
  });
}

if (contactTextarea) {
  const resizeTextarea = () => {
    contactTextarea.style.height = 'auto';
    contactTextarea.style.height = `${contactTextarea.scrollHeight}px`;
  };

  contactTextarea.addEventListener('input', resizeTextarea);
  resizeTextarea();
}
