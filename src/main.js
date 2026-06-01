'use strict';

// Fecha menu ao clicar em qualquer nav__link
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    // Remove :target do menu redirecionando para #top
    window.location.hash = 'top';
  });
});