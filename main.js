'use strict';

const page = document.querySelector('.page__body');
const overFlowMenu = document.querySelector('.icon--menu');
const overFlowMenuClose = document.querySelector('.icon--close');

overFlowMenu.addEventListener('click', () => {
  page.classList.add('page__menu--open');
});

overFlowMenuClose.addEventListener('click', () => {
  page.classList.remove('page__menu--open');
});
