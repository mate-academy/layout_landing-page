const button = document.querySelector('.header__links__phone-btn');
const number = document.querySelector('.header__links__phone');

button.addEventListener('click', () => {
  number.classList.toggle('is-visible');
});

const buttonMenu = document.querySelector('.header__links__menu-btn');
const menu = document.querySelector('.menu');

buttonMenu.addEventListener('click', () => {
  menu.classList.toggle('is-visible');
});

const buttonClose = document.querySelector('.menu__header__close');

buttonClose.addEventListener('click', () => {
  menu.classList.remove('is-visible');
});

const navLinks = document.querySelectorAll('.menu__nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-visible');
  });
});
