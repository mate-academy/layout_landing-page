const openMenuButton = document.querySelector('.icon--menu');
const closeMenuButton = document.querySelector('.icon--close');
const menu = document.getElementById('menu');
const body = document.body;
const menuLinks = document.querySelectorAll('.menu__nav .nav__link');
const logo = document.querySelector('.top-bar__logo');

function openMenu() {
  menu.classList.add('open');
  body.classList.add('no-scroll');
}

function closeMenu() {
  menu.classList.remove('open');
  body.classList.remove('no-scroll');
}

openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

logo.addEventListener('click', closeMenu);
