'use strict';

function toggleScrollLockAdvanced() {
  const body = document.body;

  if (window.location.hash === '#aside') {
    // Вимірюємо ширину скролбару
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // Додаємо відступ справа, щоб компенсувати зникнення скролбару
    body.style.paddingRight = scrollbarWidth + 'px';

    // Блокуємо скрол
    body.classList.add('no-scroll');
  } else {
    // Прибираємо відступ
    body.style.paddingRight = '';

    // Розблоковуємо скрол
    body.classList.remove('no-scroll');
  }
}

window.addEventListener('hashchange', toggleScrollLockAdvanced);

// Запускаємо при завантаженні
toggleScrollLockAdvanced();
