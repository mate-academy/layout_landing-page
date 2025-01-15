'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const menuOpen = document.querySelector('.icon--menu');
  const menuClose = document.querySelector('.icon--close');
  const navItems = document.querySelectorAll('.nav__item');

  menuOpen.addEventListener('click', () => {
    menu.classList.add('menu--visible');
  });

  menuClose.addEventListener('click', () => {
    menu.classList.remove('menu--visible');
  });

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      menu.classList.remove('menu--visible');
    });
  });
});

const detailsSection = document.querySelector('.details');
const detailItems = document.querySelectorAll('.detail');

const bikesSection = document.querySelector('.compare__bikes');
const bikeItems = document.querySelectorAll('.bike');

function onScroll() {
  let animatedBike = false;
  let animatedDetail = false;

  const detailsPosition = detailsSection.getBoundingClientRect().top;
  const bikePosition = bikesSection.getBoundingClientRect().top;

  const screenHeight = window.innerHeight;

  if (detailsPosition < screenHeight - 500) {
    detailsSection.classList.add('visible');

    detailItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 500);
    });

    animatedDetail = true;
  }

  if (bikePosition < screenHeight - 500) {
    bikeItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 300);
    });

    animatedBike = true;
  }

  if (animatedBike && animatedDetail) {
    window.removeEventListener('scroll', onScroll);
  }
}

window.addEventListener('scroll', onScroll);
