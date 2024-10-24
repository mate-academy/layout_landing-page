const menu = document.querySelector('#menu');
const page = document.querySelector('html');

function toggleMenu() {
    menu.classList.toggle('menu--open'); // Show/hide the menu
    menu.classList.toggle('menu'); // Show/hide the menu
    page.classList.toggle('no-scroll'); // Toggle no-scroll class
}

const menuToggleButton = document.querySelector('.header__nav_menu');
const menuCloseButton = document.querySelector('.menu__header_close');
menuToggleButton.addEventListener('click', toggleMenu);
