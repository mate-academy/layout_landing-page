'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('scroll-hidden');
  } else {
    document.body.classList.remove('scroll-hidden');
  }
});
