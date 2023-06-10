'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__bady--with-menu');
  } else {
    document.body.classList.remove('page__bady--with-menu');
  }
});
