'use strict';

const MENU_OPEN_CLASS = 'page__menu--open';
const SCROLL_LOCK_CLASS = 'page--with-menu';
const FAILED_SUBMIT_CLASS = 'form--failed-submit';

const root = document.documentElement;
const menu = document.getElementById('menu');
const menuOpenButton = document.getElementById('menu-open');
const menuCloseButton = document.getElementById('menu-close');

function isMenuOpen() {
  return menu.classList.contains(MENU_OPEN_CLASS);
}

function openMenu() {
  menu.classList.add(MENU_OPEN_CLASS);
  root.classList.add(SCROLL_LOCK_CLASS);
}

function closeMenu() {
  menu.classList.remove(MENU_OPEN_CLASS);
  root.classList.remove(SCROLL_LOCK_CLASS);
}

function scrollToHash(hash) {
  const target = hash && hash !== '#' ? document.querySelector(hash) : null;

  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({
      top: 0, behavior: 'smooth',
    });
  }
}

menuOpenButton.addEventListener('click', (event) => {
  event.preventDefault();
  openMenu();
});

menuCloseButton.addEventListener('click', (event) => {
  event.preventDefault();
  closeMenu();
});

menu.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    closeMenu();
    scrollToHash(link.getAttribute('href'));
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && isMenuOpen()) {
    closeMenu();
  }
});

const form = document.getElementById('contact-form');
const textarea = document.getElementById('form-textarea');
const textareaResizer = document.getElementById('textarea-resizer');

function syncTextareaHeight() {
  // A trailing line break keeps the last empty line of the text measurable
  textareaResizer.textContent = `${textarea.value}\n`;
}

textarea.addEventListener('input', syncTextareaHeight);

form.addEventListener(
  'invalid',
  () => {
    form.classList.add(FAILED_SUBMIT_CLASS);
  },
  true,
);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
  form.classList.remove(FAILED_SUBMIT_CLASS);
  syncTextareaHeight();

  if (document.activeElement instanceof window.HTMLElement) {
    document.activeElement.blur();
  }
});
