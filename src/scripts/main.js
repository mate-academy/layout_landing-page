'use strict';

function toggleScrollLock() {
  if (window.location.hash === '#menu') {
    document.body.classList.add('scroll-lock'); // Блокируем прокрутку
  } else {
    document.body.classList.remove('scroll-lock'); // Разблокируем прокрутку
  }
}

// Слушаем изменения хэша в URL
window.addEventListener('hashchange', toggleScrollLock);

// Проверяем состояние при загрузке страницы
toggleScrollLock();
