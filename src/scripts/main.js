'use strict';

const form = document.querySelector('.contacts__inputs');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  this.reset();
});
