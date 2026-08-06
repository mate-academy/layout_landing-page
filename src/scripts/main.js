'use strict';

const menuButton = document.querySelector('.site-header__menu-link');
const authModal = document.querySelector('.auth-modal');
const closeButton = document.querySelector('.auth-modal__close');
const tabs = document.querySelectorAll('.auth-modal__tab');
const forms = document.querySelectorAll('.auth-modal__form');

const setModalState = (isOpen) => {
  authModal.classList.toggle('auth-modal--open', isOpen);
  authModal.setAttribute('aria-hidden', String(!isOpen));
  menuButton.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('auth-modal-open', isOpen);

  if (isOpen) {
    authModal.querySelector('.auth-modal__tab--active').focus();
  } else {
    menuButton.focus();
  }
};

menuButton.addEventListener('click', () => setModalState(true));
closeButton.addEventListener('click', () => setModalState(false));

authModal.addEventListener('click', (event) => {
  if (event.target === authModal) {
    setModalState(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (
    event.key === 'Escape' &&
    authModal.classList.contains('auth-modal--open')
  ) {
    setModalState(false);
  }
});

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const formId = tab.getAttribute('aria-controls');

    tabs.forEach((item) => {
      const isActive = item === tab;

      item.classList.toggle('auth-modal__tab--active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });

    forms.forEach((form) => {
      form.hidden = form.id !== formId;
    });
  });
});

const contactForm = document.querySelector('.contact-form');

forms.forEach((form) => {
  form.addEventListener('submit', (event) => event.preventDefault());
});

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    contactForm.reset();
  });
}
