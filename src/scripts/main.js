'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const phoneIcon = document.querySelector('.icon--phone');
  const phoneNumber = document.querySelector('.top-bar__phone-number');
  const menu = document.getElementById('menu');
  const closeMenuIcon = document.querySelector('.icon--close');
  // eslint-disable-next-line max-len
  const logoLink = document.querySelector('.top-bar__logo-link--black');

  phoneIcon.addEventListener('mouseenter', function () {
    phoneNumber.classList.add('visible');
  });

  phoneIcon.addEventListener('mouseleave', function () {
    phoneNumber.classList.remove('visible');
  });

  document.querySelector('.icon--menu').addEventListener('click', function () {
    menu.style.right = '0';
    document.body.style.overflow = 'hidden';
  });

  closeMenuIcon.addEventListener('click', function () {
    closeMenu();
  });

  const menuLinks = document.querySelectorAll('.nav__link');

  menuLinks.forEach((link) => {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  logoLink.addEventListener('click', function (event) {
    event.preventDefault();
    closeMenu();
  });

  function closeMenu() {
    menu.style.right = '-100%';
    document.body.style.overflow = '';
  }
});
