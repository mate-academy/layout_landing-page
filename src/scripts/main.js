'use strict';

window.addEventListener('keydown', event => {
  if (event.key === 'Escape' && window.location.hash === '#menu') {
    window.location.hash = '#!';
  }
});
