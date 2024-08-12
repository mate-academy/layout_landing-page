'use strict';

const menu = document.getElementById('menu');
const menuToggle = document.querySelectorAll('.menu-toggle');

if (window.location.hash === '#menu') {
  document.body.classList.add('page__body--lock-scroll')
}

menuToggle.forEach((el) => {
  el.addEventListener('click', () => {
    document.body.classList.toggle('page__body--lock-scroll')
  })
})
