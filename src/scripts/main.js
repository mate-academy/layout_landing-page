'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.nav__link');
  const closeButton = document.getElementById('close-menu');
  const menu = document.getElementById('menu');
  const page = document.querySelector('.page');

  function closeMenu() {
    menu.classList.remove('menu--open');
    page.style.overflow = 'auto';
  }

  menuLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      closeMenu();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });

  closeButton.addEventListener('click', closeMenu);

  const menuIcon = document.querySelector('.icon--menu');

  menuIcon.addEventListener('click', function () {
    menu.classList.toggle('menu--open');
  });
});
