'use strict';

function menuClicked() {
  const sideBar = document.querySelector('.sidebar');

  sideBar.style.display = 'block';
}

function menuClosed() {
  const sideBar = document.querySelector('.sidebar');

  sideBar.style.display = 'none';
}

document.querySelector('.menu-icon').addEventListener('click', () => {
  menuClicked();
});

document.querySelector('.close-icon').addEventListener('click', () => {
  menuClosed();
});
