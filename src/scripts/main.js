'use strict';

function handleMenuScrollLock() {
  if (window.location.hash === '#menu') {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

window.addEventListener('hashchange', handleMenuScrollLock);
handleMenuScrollLock();
