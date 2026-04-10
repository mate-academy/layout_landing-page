'use strict';

const phoneIcon = document.querySelector('.header__content__info__phone');

const tooltip = document.querySelector('.header__content__info__tooltip');

const menuIcon = document.querySelector('.header__content__info__menu');

const closeIcon = document.querySelector('.header__menu__top__close');

const header = document.querySelector('.header');

phoneIcon.addEventListener('mouseenter', () => {
  tooltip.style.opacity = '1';
  tooltip.style.visibility = 'visible';
});

phoneIcon.addEventListener('mouseleave', () => {
  tooltip.style.opacity = '0';
  tooltip.style.visibility = 'hidden';
});

menuIcon.addEventListener('click', () => {
  const headerMenu = document.querySelector('.header__menu');

  headerMenu.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  const headerMenu = document.querySelector('.header__menu');

  headerMenu.classList.add('closing');

  setTimeout(() => {
    headerMenu.style.display = 'none';
    headerMenu.classList.remove('closing');
  }, 500);
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
