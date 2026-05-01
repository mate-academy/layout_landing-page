'use strict';

// Slide effect for footer on page load
window.addEventListener('DOMContentLoaded', function () {
  const footer = document.querySelector('.footer');

  if (footer) {
    footer.classList.add('footer--visible');
  }
});
