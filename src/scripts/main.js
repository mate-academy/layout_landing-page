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

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page-menu');
  } else {
    document.body.classList.remove('page-menu');
  }
});

const btn = document.querySelector('.button');

btn.addEventListener('click', function() {
  document.querySelector('form').reset();
});
