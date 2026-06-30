'use strict';

// Selecioando elementos HTML.
const burger = document.querySelector('.header__menu__icons__burger');
const menuLateralOpen = document.querySelector('.menu-lateral');
const close = document.querySelector('.menu-lateral__icons__close');

// Botões para abrir e fechar o menu lateral.
burger.addEventListener('click', () => {
  menuLateralOpen.classList.toggle('menu-lateral--open');
});

close.addEventListener('click', () => {
  menuLateralOpen.classList.toggle('menu-lateral--open');
});
