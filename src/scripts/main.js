'use strict';

const form = document.getElementById('myForm');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  form.reset();
});
