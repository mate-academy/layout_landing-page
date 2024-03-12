'use strict';

const burgerIcon = document.querySelector('.burgerIcon');
const burgerMenu = document.querySelector('.burgerMenu');
// const burgerMenuCloseIcon = document.querySelector('.burgerMenuCloseIcon');

burgerIcon.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  burgerIcon.classList.toggle('close');
});

const headerLinks = document.querySelectorAll('.burgerMenuBody a');

headerLinks.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    burgerMenu.classList.toggle('open');
    burgerIcon.classList.toggle('close');

    const idTo = e.target.dataset.to;
    const targetElement = document.getElementById(idTo);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// burgerMenuCloseIcon.addEventListener('click', () => {
//   burgerMenu.classList.toggle('open');
// });
