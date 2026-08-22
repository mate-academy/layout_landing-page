'use strict';

import '../styles/main.scss';

// ── MENU ──────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const menuPanel = document.getElementById('menuPanel');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');

function openMenu() {
  hamburger.classList.add('open');
  menuPanel.classList.add('open');
  menuOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger.classList.remove('open');
  menuPanel.classList.remove('open');
  menuOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Hamburger click
hamburger.addEventListener('click', () => {
  if (menuPanel.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

// Menu links — close panel + smooth scroll
document.querySelectorAll('.menu-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');

    if (href && href.startsWith('#')) {
      e.preventDefault();
      closeMenu();

      setTimeout(() => {
        const target = document.querySelector(href);

        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 420);
    }
  });
});

// ── FORM ──────────────────────────────────────────────
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
