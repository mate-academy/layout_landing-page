'use strict';

document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault();

  document.getElementById('form').reset();
});
