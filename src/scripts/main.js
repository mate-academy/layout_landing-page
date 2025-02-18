'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const menuToggle = document.querySelector('.icon--menu');
    const closeMenu = document.querySelector('.icon--close');
    const body = document.body;
  
    // Quando o menu for aberto
    menuToggle.addEventListener('click', function() {
      menu.classList.add('menu--open');  // Se desejar animar o menu, adicione uma classe 'menu--open'
      body.classList.add('no-scroll');   // Desativa a rolagem da página
    });
  
    // Quando o menu for fechado
    closeMenu.addEventListener('click', function() {
      menu.classList.remove('menu--open');
      body.classList.remove('no-scroll');  // Reabilita a rolagem da página
    });
  });
  