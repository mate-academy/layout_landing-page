'use strict';

window.addEventListener('hashchange', () => {
  const element = document.getElementById('pages');

  element.classList.toggle('page__body--with-menu');
});
