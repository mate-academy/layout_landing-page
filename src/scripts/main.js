'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.add('open');
});

closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-undef
    alert('Mensagem enviada!');
  });
});
