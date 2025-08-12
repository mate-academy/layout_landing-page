'use strict';

const headerBurger = document.getElementById('header-burger');
const menuClose = document.getElementById('menu-close');
const body = document.getElementsByClassName('body');

headerBurger.onclick(body.classList.add('menu--is-active'));
menuClose.onclick(body.classList.remove('menu--is-active'));
