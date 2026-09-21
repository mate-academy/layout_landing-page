'use strict';

document.querySelectorAll('.menu__link').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('menu-toggle').checked = false;
  });
});
