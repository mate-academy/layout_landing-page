'use strict';

import '../styles/main.scss';

const menuCloseButton = document.querySelector('.menu__close');

menuCloseButton?.addEventListener('click', event => {
  event.preventDefault();
  window.location.hash = 'top';
});
