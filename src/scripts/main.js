'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.footer__form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      form.reset();
    });
  }
});
