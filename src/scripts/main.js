'use strict';

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const header = document.querySelector('.header');

function closeMenu() {
  mobileMenu.classList.remove('is-open');
  menuToggle.classList.remove('is-open');
  header.classList.remove('menu-open');
  document.body.classList.remove('no-scroll');
}

function toggleMenu() {
  const isOpen = mobileMenu.classList.toggle('is-open');
  menuToggle.classList.toggle('is-open', isOpen);
  header.classList.toggle('menu-open', isOpen);
  document.body.classList.toggle('no-scroll', isOpen);
}

menuToggle.addEventListener('click', toggleMenu);

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});
