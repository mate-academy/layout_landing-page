'use strict';

const menuCloseButton = document.querySelector('.icon--close');

menuCloseButton.addEventListener('click', () => {
  document.documentElement.style.scrollBehavior = 'auto';

  window.setTimeout(() => {
    document.documentElement.style.removeProperty('scroll-behavior');
  }, 0);
});
