'use strict';

function initApp() {
  const closeBtn = document.getElementById('close');
  const openBtn = document.getElementById('open');
  const links = document.querySelectorAll('.nav__link');
  const nav = document.getElementById('menu');
  const navLinks = document.querySelectorAll('header nav a');

  for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
  }

  openBtn.addEventListener('click', () => {
    nav.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('is-active');
    document.body.style.overflow = 'auto';
  });

  links.forEach((item) => {
    item.addEventListener('click', () => {
      nav.classList.remove('is-active');
      document.body.style.overflow = 'auto';
    });
  });
}

initApp();

function smoothScroll(event) {
  event.preventDefault();

  const href = this.getAttribute('href');

  document.querySelector(href).scrollIntoView({

    behavior: 'smooth',

  });
}
