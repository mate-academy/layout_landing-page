const openMenuButton = document.querySelector('.icon--menu');
const closeMenuButton = document.querySelector('.icon--close');
const menu = document.getElementById('menu');
const body = document.body;

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
