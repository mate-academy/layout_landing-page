'use strict';

const form = document.querySelector('.form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.form__submit');

    if (submitBtn) {
      submitBtn.disabled = true;
    }

    form.reset();

    if (submitBtn) {
      submitBtn.disabled = false;
    }
  });
}

const burgerBtn = document.querySelector('.icon-link--burger');
const closeBtn = document.querySelector('.icon-link--close');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link');

function openMenu() {
  menu?.classList.add('menu--open');
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  menu?.classList.remove('menu--open');
  document.body.classList.remove('no-scroll');
}

burgerBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  openMenu();
});

closeBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  closeMenu();
});

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

menu?.addEventListener('click', (e) => {
  if (e.target === menu) {
    closeMenu();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu?.classList.contains('menu--open')) {
    closeMenu();
  }
});
