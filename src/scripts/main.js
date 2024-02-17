'use strict';

const pageBody = document.getElementById('page-body');
const form = document.getElementById('form');

function closeMenu() {
  pageBody.classList.remove('page__body--overflow-hidden');
  pageBody.classList.add('page__body--overflow-auto');
}

window.addEventListener('hashchange', function() {
  if (this.location.hash === '#menu') {
    pageBody.classList.add('page__body--overflow-hidden');
  } else {
    closeMenu();
  }
});
