'use strict';

const html = document.documentElement;
const menuOpen = document.querySelector('.icon--burger');
const menuClose = document.querySelector('.icon--close');
const menu = document.querySelector('.menu');

menuOpen.addEventListener('click', () => {
  menu.classList.add('menu--active');
  html.classList.add('no--scroll');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('menu--active');
  html.classList.remove('no--scroll');
});

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu--active');
    html.classList.remove('no--scroll');
  });
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    cards.forEach(c => {
      c.classList.remove('active', 'inactive');
    });

    card.classList.add('active');

    cards.forEach(c => {
      if (c !== card) {
        c.classList.add('inactive');
      }
    });
  });

  card.addEventListener('mouseout', () => {
    cards.forEach(c => c.classList.remove('active', 'inactive'));
  });
});
