'use strict';
  const form = document.querySelector('.main__contacts__form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.createElement('p');
    message.textContent = 'Formulário enviado!';
    form.appendChild(message);
  });
