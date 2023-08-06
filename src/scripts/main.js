'use strict';

function toggleModal() {
  const modal = document.getElementById('modalMenu');

  modal.classList.toggle('show');
}

function closeModal() {
  const modal = document.getElementById('modalMenu');

  modal.classList.remove('show');
}
