'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.reset();
  });
});
