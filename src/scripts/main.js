'use strict';

const form = document.querySelector('.message-form');
const formMessage = document.querySelector('.form-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch('submit_form.php', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      formMessage.textContent = 'Mensagem enviada com sucesso!';
      formMessage.style.color = 'green';
      form.reset();
    })
    .catch((error) => {
      formMessage.textContent = 'Ocorreu um erro, tente novamente.';
      formMessage.style.color = 'red';
      console.error(error);
    });
});
