'use strict';

const phoneButton = document.querySelector('.icon-button--phone');
const phoneNumber = document.querySelector('.header__call-link');

phoneButton.addEventListener('click', () => {
  if (phoneNumber.classList.contains('header__call-link--shown')) {
    phoneNumber.classList.remove('header__call-link--shown');
  } else {
    phoneNumber.classList.add('header__call-link--shown');
  }
});

const menuButton = document.querySelector('.icon-button--menu');
const closeButton = document.querySelector('.icon-button--close');
const menu = document.querySelector('.menu');

function menuVisibility() {
  if (menu.classList.contains('menu--visible')) {
    menu.classList.remove('menu--visible');
  } else {
    menu.classList.add('menu--visible');
  }
}

menuButton.addEventListener('click', menuVisibility);
closeButton.addEventListener('click', menuVisibility);

const homeButton = document.querySelector('#home-button');
const aboutButton = document.querySelector('#about-button');
const compareButton = document.querySelector('#compare-button');
const detailsButton = document.querySelector('#details-button');
const contactsButton = document.querySelector('#contacts-button');

homeButton.addEventListener('click', menuVisibility);

aboutButton.addEventListener('click', () => {
  menuVisibility();

  document
    .querySelector('.move-free')
    .scrollIntoView({ block: 'center', behavior: 'smooth' });
});

compareButton.addEventListener('click', () => {
  menuVisibility();

  document
    .querySelector('.compare-bikes')
    .scrollIntoView({ block: 'start', behavior: 'smooth' });
});

detailsButton.addEventListener('click', () => {
  menuVisibility();

  document
    .querySelector('.details')
    .scrollIntoView({ block: 'start', behavior: 'smooth' });
});

contactsButton.addEventListener('click', () => {
  menuVisibility();

  document
    .querySelector('.contact-us')
    .scrollIntoView({ block: 'start', behavior: 'smooth' });
});
