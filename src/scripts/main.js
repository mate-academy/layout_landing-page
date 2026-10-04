import '../styles/main.scss';
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.header__menu');
const closeButton = document.querySelector('.menu__close');

menuButton.addEventListener('click', () => {
  menu.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  menu.style.display = 'none';
});

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.style.display = 'none';
  });
});
