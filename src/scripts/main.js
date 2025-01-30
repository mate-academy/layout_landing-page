'use strict';

const header = document.querySelector('.header');
const burger = header.querySelector('.burger');
const navMenu = header.querySelector('.nav');
const navLinks = navMenu.querySelectorAll('.nav__link');
const phoneBlock = header.querySelector('.header__contact');

function menuToggler(burgerElement,navMenu,phoneIcon,header) {
  burgerElement.classList.toggle('burger--active')
  navMenu.classList.toggle('nav--active')
  phoneIcon.classList.toggle('header__contact--active')
  header.classList.toggle('header--active')

  if (navMenu.classList.contains('nav--active'))
    document.body.style.overflow = 'hidden';
  else document.body.style.overflow = '';
}

function burgerMenuAction(burgerElement, navElement, phoneIcon, header) {
  burgerElement.addEventListener('click', () => {
    menuToggler(burgerElement,navElement,phoneIcon,header)
  });
}

function closeMenuOnLinkClick(navLinks, navMenu, header, burgerElement, phoneIcon) {
  for (let item of navLinks) {
    item.addEventListener('click', () => {
      menuToggler(burgerElement,navMenu,phoneIcon,header)
    });
  }
}

function headerScroll(header) {
  window.addEventListener('scroll', () => {
    window.scrollY > 50 ? header.classList.add('header--scroll') : header.classList.remove('header--scroll');
  });
}


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
  headerScroll(header);
  burgerMenuAction(burger, navMenu, phoneBlock, header);
  closeMenuOnLinkClick(navLinks, navMenu, header, burger, phoneBlock);
});
