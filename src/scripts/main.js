'use strict';

const html = document.documentElement;
const menuOpen = document.querySelector('.icon--burger');
const menuClose = document.querySelector('.icon--close');
const menu = document.querySelector('.menu');

menuOpen.addEventListener('click', () => {
  menu.classList.add('menu--active');
  html.classList.add('no--scroll');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('menu--active');
  html.classList.remove('no--scroll');
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    // Удаляем классы у всех карточек перед добавлением новых
    cards.forEach(c => {
      c.classList.remove('active', 'inactive');
    });

    // Добавляем класс "active" к текущей карточке
    card.classList.add('active');

    // Добавляем "inactive" ко всем другим карточкам
    cards.forEach(c => {
      if (c !== card) {
        c.classList.add('inactive');
      }
    });
  });

  card.addEventListener('mouseout', () => {
    // Убираем все классы, когда курсор уходит
    cards.forEach(c => c.classList.remove('active', 'inactive'));
  });
});
