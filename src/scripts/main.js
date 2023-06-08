'use strict';

function updateMenuPadding() {
  const menu = document.getElementById('menu');
  const hasScrollbar = menu.scrollHeight > menu.clientHeight;

  menu.style.paddingRight = hasScrollbar ? '0' : `${getScrollbarWidth()}px`;
}

function getScrollbarWidth() {
  // Создаем вспомогательный элемент с прокруткой
  const scrollTester = document.createElement('div');

  scrollTester.style.overflow = 'scroll';
  scrollTester.style.width = '50px';
  scrollTester.style.height = '50px';
  scrollTester.style.visibility = 'hidden';

  // Вставляем вспомогательный элемент
  document.body.appendChild(scrollTester);

  // Вычисляем разницу между шириной контента и шириной контейнера
  const scrollbarWidth = scrollTester.offsetWidth - scrollTester.clientWidth;

  // Удаляем вспомогательный элемент
  document.body.removeChild(scrollTester);

  return scrollbarWidth;
}

window.addEventListener('load', updateMenuPadding);
window.addEventListener('resize', updateMenuPadding);
