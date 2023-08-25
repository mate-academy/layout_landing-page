'use strict';

const triggerElement = document.querySelector('.icon--call');
const targetElement = document.querySelector('.top-bar__hover-desktop');

triggerElement.addEventListener('mouseenter', () => {
  targetElement.classList.add('top-bar__hover-desktop--active');
});

triggerElement.addEventListener('mouseleave', () => {
  targetElement.classList.remove('top-bar__hover-desktop--active');
});

targetElement.addEventListener('mouseenter', () => {
  targetElement.classList.add('top-bar__hover-desktop--active');
});

targetElement.addEventListener('mouseleave', () => {
  targetElement.classList.remove('top-bar__hover-desktop--active');
});
