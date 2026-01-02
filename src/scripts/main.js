'use strict';

const burgerButtonClose = document.querySelector('[data-burger="close"]');
const burgerButtonOpen = document.querySelector('[data-burger="open"]');
const aside = document.querySelector('.aside');

burgerButtonClose.addEventListener('click', () => {
  aside.classList.remove('aside--active');
});

burgerButtonOpen.addEventListener('click', () => {
  aside.classList.add('aside--active');
});

aside.addEventListener('click', () => {
  aside.classList.remove('aside--active');
});

const body = document.querySelector('.body');
const sentinel = document.querySelector('.scroll-tracker');

const observer = new IntersectionObserver(([entry]) => {
  body.classList.toggle('nav--fixed', !entry.isIntersecting)
  },
  { threshold: 1 },
);

observer.observe(sentinel);
