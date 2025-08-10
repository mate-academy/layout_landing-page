'use strict';

function toggleScrollLockAdvanced() {
  const body = document.body;

  if (window.location.hash === '#aside') {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    body.style.paddingRight = scrollbarWidth + 'px';

    body.classList.add('no-scroll');
  } else {
    body.style.paddingRight = '';

    body.classList.remove('no-scroll');
  }
}

window.addEventListener('hashchange', toggleScrollLockAdvanced);

toggleScrollLockAdvanced();
