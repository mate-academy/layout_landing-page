'use strict';

const backToTopButton = document.getElementById('backToTop');

let isScrolling = false;

window.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('back-to-top--visible');
      } else {
        backToTopButton.classList.remove('back-to-top--visible');
      }
      isScrolling = false;
    });
    isScrolling = true;
  }
});
