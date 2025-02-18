'use strict';

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});
