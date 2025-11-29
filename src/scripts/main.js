'use strict';

function handleScrollLock() {
  const currentHash = window.location.hash;
  const body = document.body;

  if (currentHash === '#menu') {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
}

handleScrollLock();

window.addEventListener('hashchange', handleScrollLock);

const form = document.querySelector('.contacts__form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent page reload

  // your logic here (send data, show message, etc.)

  form.reset(); // clear all inputs + textarea
});
