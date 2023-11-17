'use strict';

const phoneIcon = document.body.querySelector('.header__phoneSvg');
const menuIcon = document.body.querySelector('.header__menuSvg');
let phoneNumber = document.body.querySelector('.header__PhoneNumber');
const nav = document.body.querySelector('.navigation');

document.body.addEventListener('click', (event) => {
/*   if (event.target === phoneIcon) {
    phoneNumber.style['pointer-events'] = 'all';
    phoneNumber.style.opacity = 1;
  }

  if (event.target !== phoneIcon
    && phoneNumber.style['pointer-events'] === 'all') {
    phoneNumber.style.opacity = 0;
    phoneNumber.style['pointer-events'] = 'none';
  } */

  if (event.target === menuIcon) {
    nav.style['pointer-events'] = 'all';
    nav.style.opacity = 1;
    nav.style['z-index'] = 10;
  }

  if (event.target !== menuIcon) {
    nav.style['pointer-events'] = 'none';
    nav.style.opacity = 0;

    setTimeout(() => {
      nav.style['z-index'] = -10;
      //nav.style['background-color'] = 'red';
    }, 500);
  }
});


/*
  pointer-events: none;
  opacity: 0;
  z-index: -10;
*/
