// @ts-nocheck
'use strict';

/* #region hide menu icon on click */
const Icons = document.querySelector('.top-bar__icons');
const menuIcon = document.querySelector('.top-bar__icon--menu');
const closeIcon = document.querySelector('.top-bar__icon--close');

menuIcon?.addEventListener('click', () => {
  Icons.classList.toggle('top-bar__icons--show');
});

closeIcon?.addEventListener('click', () => {
  Icons.classList.toggle('top-bar__icons--show');
});
/* end hide menu icon on click */
