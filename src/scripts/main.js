'use strict';

// Pegando os elementos pelo ID ou classe
const toggle = document.getElementById('toggle'); // Botão hamburguer
const closeBtn = document.getElementById('close-btn'); // Botão fechar
const menu = document.getElementById('sidemenu'); // Menu lateral
const overlay = document.getElementById('overlay'); // Fundo escurecido

// Abrir o Menu
toggle.addEventListener('click', () => {
  menu.classList.add('active');
  overlay.classList.add('active');
});

// Fechar o Menu
closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  overlay.classList.remove('active');
});

// AQUI COMEÇA A NOVA SEÇÃO PARA O MENU DE TELEFONE
// Usando uma função para isolar o escopo
(function () {
  // Agora o seletor aponta para o ID do botão
  const phoneToggle = document.getElementById('phone-menu-toggle');
  const phoneMenu = document.getElementById('phone-menu-dropdown');
  const phoneOverlay = document.getElementById('.phone-overlay');

  // Abre o Menu de Telefone
  if (phoneToggle && phoneMenu && phoneOverlay) {
    phoneToggle.addEventListener('click', () => {
      phoneMenu.classList.toggle('active');
      phoneOverlay.classList.toggle('active');
    });
  }

  // Fecha o Menu de Telefone ao clicar fora
  if (phoneOverlay) {
    phoneOverlay.addEventListener('click', () => {
      phoneMenu.classList.remove('active');
      phoneOverlay.classList.remove('active');
    });
  }
})();
// FIM DA SEÇÃO DO MENU DE TELEFONE
