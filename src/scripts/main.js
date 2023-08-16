'use strict';

document.getElementById('form').addEventListener('submit',
  function(e) {
    e.preventDefault();

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
);
