'use strict';

const buttonMenu = document.getElementById('buttonMenu');
const headerNavbar = document.getElementById('headerNavbar');

buttonMenu.onclick = function() {
  headerNavbar.classList.add('open');
};

headerNavbar.onclick = function() {
  headerNavbar.classList.remove('open');
};
