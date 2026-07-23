'use strict';

// Selecioando elementos HTML.
const burger = document.querySelector('.header__burger');
const menuLateralOpen = document.querySelector('.menu');
const close = document.querySelector('.menu__close');

// Botões para abrir e fechar o menu lateral.
burger.addEventListener('click', () => {
  menuLateralOpen.classList.toggle('menu--open');
});

close.addEventListener('click', () => {
  menuLateralOpen.classList.toggle('menu--open');
});
