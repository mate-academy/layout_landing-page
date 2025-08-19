'use strict';

document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const form = event.target;

  if (form.checkValidity()) {
    form.reset();
  } else {
    form.reportValidity();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.js-menu-open');
  const close = document.querySelector('.js-menu-close');
  const body = document.body;
  const menu = document.getElementById('menu');

  if (!burger || !close || !menu) return;

  burger.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.add('menu-open');
    menu.classList.add('menu--open');
  });

  close.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.remove('menu-open');
    menu.classList.remove('menu--open');
  });
});
