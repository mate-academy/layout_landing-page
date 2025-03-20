'use strict';

const dropdown = document.querySelector('.phone__dropdown');
const trigger = document.querySelector('.icon--phone');
const menu = document.querySelector('.phone__menu');

trigger.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  dropdown.classList.toggle('.phone--active');
});
