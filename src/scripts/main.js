'use strict';

/* global IntersectionObserver */

/**
 * ============================================
 * MyBike - JavaScript Principal
 * ============================================
 *
 * Este arquivo controla as funcionalidades interativas do site:
 * - Menu mobile (abrir/fechar com suporte a acessibilidade)
 * - Animações de scroll (revelação de elementos)
 * - Rolagem suave para links de âncora
 *
 * @author MyBike Team
 */

// ============================================
// INICIALIZAÇÃO
// Aguarda o DOM estar completamente carregado
// antes de executar qualquer funcionalidade
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu(); // Inicializa menu mobile
  initScrollReveal(); // Inicializa animações de scroll
  initSmoothScroll(); // Inicializa rolagem suave
});

/**
 * ============================================
 * MENU MOBILE
 * ============================================
 *
 * Controla a abertura e fechamento do menu lateral móvel.
 * Funcionalidades incluídas:
 * - Abrir/fechar com botões
 * - Fechar ao clicar no overlay (fundo escuro)
 * - Fechar ao pressionar tecla Escape
 * - Suporte a acessibilidade (ARIA, focus trap)
 * - Bloqueio de scroll do body quando aberto
 */
function initMobileMenu() {
  // ----------------------------------------
  // Referências aos elementos do DOM
  // ----------------------------------------
  // Botão hamburger (abrir)
  const menuOpen = document.getElementById('menuOpen');
  // Botão X (fechar)
  const menuClose = document.getElementById('menuClose');
  // Container do menu
  const mobileMenu = document.getElementById('mobileMenu');
  // Overlay escuro de fundo
  const menuOverlay = document.getElementById('menuOverlay');
  const body = document.body;

  // Verifica se todos os elementos existem antes de continuar
  // Previne erros se elementos não forem encontrados
  if (!menuOpen || !menuClose || !mobileMenu || !menuOverlay) {
    return;
  }

  /**
   * Abre o menu mobile
   * - Adiciona classes de ativação para mostrar o menu
   * - Bloqueia o scroll do body para evitar rolagem
   * - Atualiza atributos ARIA para leitores de tela
   * - Move o foco para o primeiro link (acessibilidade)
   */
  function openMenu() {
    mobileMenu.classList.add('is-active'); // Mostra o menu
    menuOverlay.classList.add('is-active'); // Mostra overlay
    body.classList.add('menu-open'); // Bloqueia scroll do body
    // Indica que menu está expandido
    menuOpen.setAttribute('aria-expanded', 'true');
    // Menu não está mais oculto
    mobileMenu.setAttribute('aria-hidden', 'false');

    // Focus trap: move foco para o primeiro link do menu
    // Isso melhora a navegação por teclado (acessibilidade)
    const firstLink = mobileMenu.querySelector('.mobile-menu__link');

    if (firstLink) {
      firstLink.focus();
    }
  }

  /**
   * Fecha o menu mobile
   * - Remove classes de ativação para esconder o menu
   * - Libera o scroll do body
   * - Atualiza atributos ARIA
   * - Retorna o foco para o botão hamburger
   */
  function closeMenu() {
    mobileMenu.classList.remove('is-active'); // Esconde o menu
    menuOverlay.classList.remove('is-active'); // Esconde overlay
    body.classList.remove('menu-open'); // Libera scroll do body
    // Menu não está mais expandido
    menuOpen.setAttribute('aria-expanded', 'false');
    // Menu está oculto novamente
    mobileMenu.setAttribute('aria-hidden', 'true');

    // Retorna o foco para o botão do menu (acessibilidade)
    // Permite que usuário continue navegando de onde parou
    menuOpen.focus();
  }

  // ----------------------------------------
  // Event Listeners - Eventos de clique
  // ----------------------------------------
  menuOpen.addEventListener('click', openMenu); // Botão hamburger
  menuClose.addEventListener('click', closeMenu); // Botão X
  // Clique fora do menu (no overlay)
  menuOverlay.addEventListener('click', closeMenu);

  // Fecha o menu ao clicar em qualquer link de navegação
  // Isso permite navegação fluida para as seções
  const menuLinks = mobileMenu.querySelectorAll(
    '.mobile-menu__link, .mobile-menu__cta',
  );

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // ----------------------------------------
  // Suporte a teclado (Acessibilidade)
  // ----------------------------------------
  // Fecha o menu quando o usuário pressiona Escape
  // Padrão comum de UX para modais e menus
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-active')) {
      closeMenu();
    }
  });
}

/**
 * ============================================
 * ANIMAÇÕES DE SCROLL (SCROLL REVEAL)
 * ============================================
 *
 * Anima elementos conforme entram na viewport do usuário.
 * Usa Intersection Observer para melhor performance.
 * Respeita preferência de movimento reduzido (acessibilidade).
 *
 * Classes utilizadas:
 * - .scroll-reveal: Elementos que aparecem com fade-in
 * - .stagger-item: Elementos com animação escalonada (delay)
 */
function initScrollReveal() {
  // Seleciona todos os elementos que devem ser animados
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const staggerItems = document.querySelectorAll('.stagger-item');

  // ----------------------------------------
  // Verifica preferência de acessibilidade
  // ----------------------------------------
  // Alguns usuários preferem menos movimento na tela
  // (configurável nas preferências do sistema operacional)
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  // Se usuário prefere menos movimento, mostra tudo instantaneamente
  if (prefersReducedMotion) {
    revealElements.forEach((el) => el.classList.add('is-visible'));
    staggerItems.forEach((el) => el.classList.add('is-visible'));

    return; // Sai da função, não configura observers
  }

  /**
   * Função de fallback para navegadores sem Intersection Observer
   * Verifica a posição dos elementos em relação à viewport
   * e adiciona classe de visibilidade quando apropriado
   */
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight; // Altura da viewport
    const revealPoint = 150; // Distância do fundo da tela para revelar (px)

    // Processa elementos .scroll-reveal
    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      // Revela se o elemento estiver a 150px do fundo da viewport
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('is-visible');
      }
    });

    // Processa elementos .stagger-item com delay escalonado
    staggerItems.forEach((el, index) => {
      const elementTop = el.getBoundingClientRect().top;

      // Revela com delay de 100ms * índice do elemento
      // Ex: 1º item = 0ms, 2º = 100ms, 3º = 200ms...
      if (
        elementTop < windowHeight - revealPoint &&
        !el.classList.contains('is-visible')
      ) {
        setTimeout(() => {
          el.classList.add('is-visible');
        }, index * 100);
      }
    });
  };

  // ----------------------------------------
  // Intersection Observer (método preferido)
  // ----------------------------------------
  // Intersection Observer é mais performático que scroll events
  // pois é executado de forma assíncrona pelo navegador
  if ('IntersectionObserver' in window) {
    // Configurações do observer
    const observerOptions = {
      root: null, // Usa viewport como referência
      rootMargin: '0px 0px -150px 0px', // Margem de 150px do fundo
      threshold: 0, // Dispara quando qualquer parte aparecer
    };

    // Observer para elementos .scroll-reveal
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Para de observar (performance)
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Registra cada elemento para ser observado
    revealElements.forEach((el) => revealObserver.observe(el));

    // Observer para elementos .stagger-item (com delay entre itens)
    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Calcula índice real do elemento na lista
          const itemIndex = Array.from(staggerItems).indexOf(entry.target);

          // Aplica delay baseado no índice
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, itemIndex * 100);
          staggerObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    staggerItems.forEach((el) => staggerObserver.observe(el));
  } else {
    // ----------------------------------------
    // Fallback para navegadores antigos
    // ----------------------------------------
    // Navegadores que não suportam Intersection Observer
    // usam eventos de scroll tradicionais
    window.addEventListener('scroll', revealOnScroll, { passive: true });
    window.addEventListener('load', revealOnScroll);
  }

  // Verificação inicial - revela elementos já visíveis no carregamento
  // Importante para elementos acima da "dobra" (above the fold)
  revealOnScroll();
}

/**
 * ============================================
 * ROLAGEM SUAVE (SMOOTH SCROLL)
 * ============================================
 *
 * Adiciona comportamento de rolagem suave para links de âncora.
 * Quando usuário clica em <a href="#section">, a página rola
 * suavemente até a seção correspondente.
 *
 * Exemplos de uso:
 * - <a href="#about"> rola até <section id="about">
 * - <a href="#contact"> rola até <section id="contact">
 */
function initSmoothScroll() {
  // Seleciona todos os links que começam com # (links de âncora)
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // Ignora links vazios que apontam apenas para "#"
      // Estes geralmente são usados como placeholders
      if (href === '#') {
        return;
      }

      // Encontra o elemento alvo usando o href como seletor
      const target = document.querySelector(href);

      if (target) {
        e.preventDefault(); // Previne comportamento padrão do link

        // Rola suavemente até o elemento alvo
        // scrollIntoView é suportado por todos os navegadores modernos
        target.scrollIntoView({
          behavior: 'smooth', // Animação suave
          block: 'start', // Alinha o elemento no topo da viewport
        });
      }
    });
  });
}
