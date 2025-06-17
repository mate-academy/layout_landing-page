'use strict';

// menu mobile

const menuBtn = document.querySelector('.mobile__btn');

const menuClose = document.querySelector('.mobile__close');

const menuMobile = document.querySelector('.menu__mobile');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.add('showMobile');
});

menuClose.addEventListener('click', () => {
  menuMobile.classList.remove('showMobile');
});

// show phone details

const phoneBtn = document.querySelector('.header__phone');

const phoneDetails = document.querySelector('.phone__details');

phoneBtn.addEventListener('click', () => {
  phoneDetails.classList.toggle('showDetails');
});
