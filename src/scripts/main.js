const phoneBtn = document.querySelector('.header__links__phone-btn');
const phone = document.querySelector('.header__links__phone');

let hideTimeout;

phoneBtn.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout);
  phone.classList.add('is-visible');
});

phoneBtn.addEventListener('mouseleave', () => {
  hideTimeout = setTimeout(() => {
    phone.classList.remove('is-visible');
  }, 2000);
});

phone.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout);
});

phone.addEventListener('mouseleave', () => {
  hideTimeout = setTimeout(() => {
    phone.classList.remove('is-visible');
  });
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
