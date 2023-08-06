'use strict';

let modal;

function toggleModal(event) {
  event.stopPropagation();
  modal.classList.toggle('show');
}

function closeModal() {
  modal.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', function() {
  modal = document.getElementById('modalMenu');
  modal.addEventListener('click', closeModal);

  const menuOpener = document.querySelector('.menu__opener');

  menuOpener.addEventListener('click', toggleModal);
});

document.getElementById('sendButton').addEventListener('click', function() {
  clearForm();
});

function clearForm() {
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const messageTextarea = document.getElementById('message');

  usernameInput.value = '';
  emailInput.value = '';
  messageTextarea.value = '';
}
