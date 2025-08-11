'use strict';

// MENU PRINCIPAL (Hamburguer)
const toggle = document.getElementById('toggle');
const closeBtn = document.getElementById('close-btn');
const menu = document.getElementById('sidemenu');
const overlay = document.querySelector('.overlay');

toggle.addEventListener('click', () => {
  menu.classList.add('active');
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('active');
  overlay.classList.remove('active');
  phoneMenu.classList.remove('active');
});

// MENU DE TELEFONE
const phoneToggle = document.querySelector('.phone-toggle');
const phoneMenu = document.querySelector('.phone-dropdown');

phoneToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  phoneMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!phoneMenu.contains(e.target) && !phoneToggle.contains(e.target)) {
    phoneMenu.classList.remove('active');
  }
});
