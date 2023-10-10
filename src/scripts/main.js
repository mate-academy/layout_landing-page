'use strict';

const menu = document.querySelector('.header__icon--menu');
const items = document.querySelectorAll('.nav__item');
const closeMenu = document.querySelector('.header__icon--close');
const form = document.querySelector('form');

menu.onclick = () => {
  let time = 200;

  items.forEach((item, index) => {
    item.style.animation = `menu 0.3s ${0.1 + index * 0.1}s`;

    setTimeout(() => {
      item.style.opacity = '1';
    }, time);
    time += 100;
  });
};

closeMenu.onclick = () => {
  items.forEach((item) => {
    item.style.animation = '';
    item.style.opacity = '0';
  });
};

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

const headerIconPhone = document.querySelector('.header__icon--phone');
const headerTextBlock = document.querySelector('.header__text-block');

headerIconPhone.addEventListener('mouseenter', () => {
  headerTextBlock.style.opacity = '1';
});

headerTextBlock.addEventListener('mouseleave', () => {
  headerTextBlock.style.opacity = '0';
});
