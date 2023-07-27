'use strict';

const body = document.querySelector('body');
const openMenuButton = document.querySelector('#menu-open');
const closeMenuButton = document.querySelector('#menu-close');
const menu = document.querySelector('#page-menu');
const menuNavLinks = document.querySelectorAll('.menu__link');

// clicks
const toClickOnMenu = () => {
  menu.classList.toggle('page__menu--active');
  body.classList.toggle('page__body--menu-active');
};

openMenuButton.addEventListener('click', toClickOnMenu);

closeMenuButton.addEventListener('click', toClickOnMenu);

const navLinks = Array.from(menuNavLinks);

navLinks.forEach((item) => {
  item.addEventListener('click', toClickOnMenu);
});

// animation with scroll
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

const options = { threshold: [1] };
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.element-with-animation');

for (const element of elements) {
  observer.observe(element);
}
