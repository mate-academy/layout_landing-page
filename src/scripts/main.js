'use strict';

const burger = document.querySelector('.icon--menu');
const closeBtn = document.querySelector('.icon--close');

if (burger && closeBtn) {
  burger.addEventListener('click', () => {
    document.body.classList.add('menu-open');
  });

  closeBtn.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
  });
}

// Закриття меню при кліку поза ним (опціонально)
document.addEventListener('click', (e) => {
  const menu = document.querySelector('.menu');

  if (
    document.body.classList.contains('menu-open') &&
    !menu.contains(e.target) &&
    !e.target.classList.contains('icon--menu')
  ) {
    document.body.classList.remove('menu-open');
  }
});
