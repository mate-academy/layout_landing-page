'use strict';

const incon = document.querySelectorAll('.menu-toggle');
incon.forEach((el) => {
  el.addEventListener('click', () => {
    document.body.classList.toggle('page__body--lock-scroll')
  })
})
