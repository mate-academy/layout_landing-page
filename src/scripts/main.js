// Script para abrir/fechar menu mobile e controlar scroll body
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav.nav');
const body = document.body;

burger.addEventListener('click', () => {
  nav.classList.toggle('is-active');
  body.classList.toggle('menu-open');

  // Controle aria-expanded para acessibilidade
  const expanded = burger.getAttribute('aria-expanded') === 'true';

  burger.setAttribute('aria-expanded', !expanded);
});

// Fecha menu ao clicar em algum link
if (nav) {
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-active');
      body.classList.remove('menu-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}
