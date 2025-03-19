'use strict';

const menuIconLink = document.querySelector('.show-menu');
const menuIcon = document.querySelector('.show-menu img');

menuIconLink.addEventListener('mousemove', nonActiveBarIcon);
menuIconLink.addEventListener('mouseout', activeBarIcon);

function activeBarIcon() {
  menuIcon.src = 'assets/images/icons/icon-burger-menu.png';
}

function nonActiveBarIcon() {
  menuIcon.src = 'assets/images/icons/icon-burger-menu-hover.png';
}
