'use strict';

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});
