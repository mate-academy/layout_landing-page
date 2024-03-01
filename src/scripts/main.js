'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__with-menu');
  } else {
    document.body.classList.remove('page__with-menu');
  }
});
