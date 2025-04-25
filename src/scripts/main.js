'use strict';

const menuOpenButton = document.querySelector('#open-menu-button');
const menuElement = document.querySelector('#menu');
const menuLogoLink = document.querySelector('#menu_logo');
const menuCloseButton = document.querySelector('.icon--close');
const menuNavLinks = menuElement.querySelectorAll('.nav__link');
const menuPhoneNumberLink = menuElement.querySelector('.menu__phone-number');
const menuCallToOrderLink = menuElement.querySelector('.menu__call-to-order');
const outsideMenuElements = document.querySelectorAll(
  '#page-logo, ' +
    'header .icon--phone, ' +
    '#open-menu-button, ' +
    'main .categories__button, ' +
    'main .category__link, ' +
    'main .form__name, ' +
    'main .form__email, ' +
    'main .form__message, ' +
    'main .contacts__button, ' +
    'main .information__phone-number a, ' +
    'main .information__email-name a, ' +
    'main .information__address-description a',
);

function openMenu() {
  menuElement.classList.add('menu--open');
  menuLogoLink.tabIndex = 0;
  menuCloseButton.tabIndex = 0;
  menuNavLinks.forEach((link) => (link.tabIndex = 0));
  menuPhoneNumberLink.tabIndex = 0;
  menuCallToOrderLink.tabIndex = 0;

  outsideMenuElements.forEach((element) => (element.tabIndex = -1));
}

function closeMenu() {
  menuElement.classList.remove('menu--open');
  menuLogoLink.tabIndex = -1;
  menuCloseButton.tabIndex = -1;
  menuNavLinks.forEach((link) => (link.tabIndex = -1));
  menuPhoneNumberLink.tabIndex = -1;
  menuCallToOrderLink.tabIndex = -1;

  outsideMenuElements.forEach((element) => (element.tabIndex = 0));
}

menuOpenButton.addEventListener('click', () => {
  openMenu();
});

menuCloseButton.addEventListener('click', () => {
  closeMenu();
});
