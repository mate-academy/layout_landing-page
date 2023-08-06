'use strict';

const modal = document.getElementById('modalMenu');

function toggleModal() {
  modal.classList.toggle('show');
}

function closeModal() {

  modal.classList.remove('show');
}

modal.addEventListener('click', toggleModal);
modal.addEventListener('click', closeModal);
