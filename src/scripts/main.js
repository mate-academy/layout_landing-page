'use strict';

function initApp() {
  const closeBtn = document.getElementById('close');
  const openBtn = document.getElementById('open');
  const nav = document.getElementById('menu');

  openBtn.addEventListener('click', () => {
    nav.classList.add('is-active');
  });

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('is-active');
  });
}

initApp();
