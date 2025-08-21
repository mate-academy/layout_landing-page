'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const NAV_BTN = document.getElementById('nav-btn');
  const DROPDOWN_MENU = document.getElementById('dropdown-menu');
  const HEADER = document.querySelector('.header');

  // Element used for animation effect
  const RIBBONS = document.getElementById('header-ribbons');

  // Toggle the nav menu when the NAV_BTN is clicked
  NAV_BTN.addEventListener('click', () => {
    NAV_BTN.classList.toggle('navbar__navigation-button--active');
    RIBBONS.classList.toggle('header__ribbons--active');
    DROPDOWN_MENU.classList.toggle('navbar__menu--active');
    HEADER.classList.toggle('fixed');
    document.body.classList.toggle('block-scrolling');
  });
});
