'use strict';

const burger = document.querySelector('.icon--burger');
const iconClose = document.querySelector('.icon--close');
const body = document.querySelector('.page__body');
const pageMunu = document.querySelector('.page__menu');
const navLinks = document.querySelectorAll('.nav__link');

const burgerDataset = [burger, iconClose, ...navLinks];

for (let i = 0; i < burgerDataset.length; i++) {
  burgerDataset[i].addEventListener('click', () => {
    pageMunu.classList.toggle('page__menu--active');
    body.classList.toggle('page__body--lock');
  });
}
