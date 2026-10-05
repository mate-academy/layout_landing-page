import '../styles/main.scss';

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.header__menu');
const closeButton = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__link');

menuButton.addEventListener('click', () => {
  menu.classList.add('menu--open');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('menu--open');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu--open');
  });
});

const form = document.querySelector('.contacts__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
