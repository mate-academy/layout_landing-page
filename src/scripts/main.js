'use strict';
// Exemplo com JavaScript comum
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  console.log({
    name: event.target[0].value,
    email: event.target[1].value,
    message: event.target[2].value
  });
});


