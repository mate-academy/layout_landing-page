'use strict';

const header = document.querySelector('.header');
const viewportHeight = window.innerHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > viewportHeight) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
