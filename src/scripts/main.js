'use strict';

document.getElementById('contact-us__form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
    this.reset();
  });
