'use strict';

// window.addEventListener('hashchange', () => {
//   if (window.location.hash === '#menu') {
//     document.body.classList.add('page--with-menu');
//   } else {
//     document.body.classList.remove('page--with-menu');
//   }
// });

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});
