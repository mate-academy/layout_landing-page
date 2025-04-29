'use strict';

function menuClicked() {
  const sideBar = document.querySelector('.sidebar');

  sideBar.style.display = 'block';
}

function menuClosed() {
  const sideBar = document.querySelector('.sidebar');

  sideBar.style.display = 'none';
}

menuClicked();
menuClosed();
