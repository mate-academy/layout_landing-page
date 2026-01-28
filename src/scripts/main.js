'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------
  // 1. Menu Mobile
  // --------------------------------------------------------
  const menuOpenBtn = document.getElementById('menuOpen');
  const menuCloseBtn = document.getElementById('menuClose');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuOverlay = document.getElementById('menuOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');

  function openMenu() {
    mobileMenu.classList.add('is-active');
    menuOverlay.classList.add('is-active');
    menuOpenBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Bloqueia o scroll do fundo
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-active');
    menuOverlay.classList.remove('is-active');
    menuOpenBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = ''; // Libera o scroll
  }

  if (menuOpenBtn) menuOpenBtn.addEventListener('click', openMenu);
  if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeMenu);
  if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);

  // Fecha o menu ao clicar em um link
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // --------------------------------------------------------
  // 2. Scroll Reveal (Faz as seções aparecerem)
  // --------------------------------------------------------
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const staggerItems = document.querySelectorAll('.stagger-item');

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Adiciona a classe que muda a opacidade para 1
          entry.target.classList.add('is-visible');
          // Para de observar o elemento depois que ele apareceu
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.15, // Ativa quando 15% do elemento estiver visível
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
  staggerItems.forEach((el) => revealObserver.observe(el));
});
