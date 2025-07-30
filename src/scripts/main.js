'use strict';

const mainForm = document.getElementById('main-form');

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  mainForm.reset();
});
