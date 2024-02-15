'use strict';

const mainForm = document.getElementById("mainform");

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
