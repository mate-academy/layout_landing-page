'use strict';

const openMenuIcon = document.querySelector('.icon--menu');
const closeMenuIcon = document.querySelector('.icon--close');

// Проверяем, что элементы существуют
if (openMenuIcon && closeMenuIcon) {
  openMenuIcon.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
  });

  closeMenuIcon.addEventListener('click', () => {
    document.body.style.overflow = '';
  });
}
