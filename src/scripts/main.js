'use strict';

document.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});

const menu = document.querySelector('.page__menu');
const page = document.querySelector('.page');

menu.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    page.style.overflow = 'hidden';
  } else {
    page.style.overflow = 'auto';
  }
});
