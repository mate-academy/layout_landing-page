'use strict';

const backToTopButton = document.getElementById('backToTop');
const menu = document.getElementById('menu');
const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');
const menuLinks = document.querySelectorAll('.nav__link');

// --- логіка меню ---
if (menu && openBtn && closeBtn) {
  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.add('page__menu--visible');
  });

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.remove('page__menu--visible');
  });
}

// --- закрыття меню при переході по лінку ---
if (menuLinks.length > 0) {
  menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('href');

      if (!target || target === '#') {
        e.preventDefault();
        menu.classList.remove('page__menu--visible');

        return;
      }

      e.preventDefault();
      menu.classList.remove('page__menu--visible');

      setTimeout(() => {
        const targetElement = document.querySelector(target);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 250);
    });
  });
}

// --- скрол для кнопки наверх ---
let isScrolling = false;

window.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('back-to-top--visible');
      } else {
        backToTopButton.classList.remove('back-to-top--visible');
      }
      isScrolling = false;
    });
    isScrolling = true;
  }
});
