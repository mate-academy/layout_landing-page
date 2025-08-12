'use strict';

const headerBurger = document.getElementById('header-burger');
const menuClose = document.getElementById('menu-close');
const body = document.querySelector('body');

body.className = '';

headerBurger.addEventListener('click', activate);

menuClose.addEventListener('click', deactivate);

function activate() {
  body.className = 'menu--is-active';
}

function deactivate() {
  body.className = '';
}
