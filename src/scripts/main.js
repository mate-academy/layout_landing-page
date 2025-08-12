'use strict';

const headerBurger = document.getElementById('header-burger');
const menuClose = document.getElementById('menu-close');
const body = document.querySelector('body');
const menuLink = document.querySelectorAll('.menu__link');

const test = document.querySelector('.test-ride__link');

body.className = '';

headerBurger.addEventListener('click', activate);

menuClose.addEventListener('click', deactivate);

for (const lnk of menuLink) {
  lnk.addEventListener('click', deactivate);
}

test.addEventListener('click', deactivate);

function activate() {
  body.className = 'menu--is-active';
}

function deactivate() {
  body.classList.remove('menu--is-active');
}
