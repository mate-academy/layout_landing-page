'use strict';

const menuElements = document.querySelectorAll('.menu');

menuElements.forEach((menu) => {
  menu.addEventListener('wheel', (e) => {
    e.preventDefault();
  });
});
