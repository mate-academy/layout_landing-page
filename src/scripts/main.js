'use strict';

const animatedElementsLeft
= document.querySelectorAll('.animate-on-scroll-left');

function animateElementsLeft() {
  animatedElementsLeft.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight) {
      element.classList.add('animate');
    } else {
      element.classList.remove('animate');
    }
  });
}

animateElementsLeft();

const animatedElementsRight
= document.querySelectorAll('.animate-on-scroll-right');

function animateElementsRight() {
  animatedElementsRight.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight) {
      element.classList.add('animate');
    } else {
      element.classList.remove('animate');
    }
  });
}

animateElementsRight();

window.addEventListener('scroll', () => {
  animateElementsRight();
  animateElementsLeft();
});

const header = document.querySelector('.header__box');

window.addEventListener('scroll', function() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop;
  const viewportHeight = Math.max(document.documentElement.clientHeight,
    window.innerHeight || 0);

  if (distanceY > viewportHeight * 0.1) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page-menu');
  } else {
    document.body.classList.remove('page-menu');
  }
});
