'use strict';

const header = document.querySelector('.header');
const burger = header.querySelector('.burger');
const navMenu = header.querySelector('.nav');
const phoneBlock = header.querySelector('.header__contact');

function burgerMenuAction(burgerElement, navElement, phoneIcon, header) {
  burgerElement.addEventListener('click', () => {
    burgerElement.classList.toggle('burger--active');
    navElement.classList.toggle('nav--active');
    phoneIcon.classList.toggle('header__contact--active');
    header.classList.toggle('header--active');

    if (navElement.classList.contains('nav--active'))
      document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  });
}

burgerMenuAction(burger, navMenu, phoneBlock, header);


function observeElements(elementId) {
  const elements = document.querySelectorAll(`.${elementId}`);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      entry.isIntersecting ? entry.target.classList.add(`${elementId}--active`) : entry.target.classList.remove(`${elementId}--active`);
    });
  }, options);

  elements.forEach(item => {
    observer.observe(item);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  observeElements('observe-element');
});



