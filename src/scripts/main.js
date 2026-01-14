'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');

  burger.addEventListener('click', () => {
    if (burger.classList.contains('icon--menu')) {
      burger.classList.remove('icon--menu');
      burger.classList.add('icon--menu-click');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const close = document.getElementById('close');
  const burger = document.getElementById('burger');

  close.addEventListener('click', () => {
    if (burger.classList.contains('icon--menu-click')) {
      burger.classList.remove('icon--menu-click');
      burger.classList.add('icon--menu');
    }
  });
});
