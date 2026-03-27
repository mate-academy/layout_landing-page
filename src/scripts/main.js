'use strict';

const syncMenuState = () => {
  document.body.classList.toggle('page--menu-open', window.location.hash === '#menu');
};

window.addEventListener('hashchange', syncMenuState);
window.addEventListener('load', syncMenuState);

window.addEventListener('keydown', event => {
  if (event.key === 'Escape' && window.location.hash === '#menu') {
    window.location.hash = '#!';
  }
});
