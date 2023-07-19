'use strict';

const form = document.getElementById('myForm');

form.addEventListener('submit',
  function(event) {
    event.preventDefault();
    form.reset();
  });
