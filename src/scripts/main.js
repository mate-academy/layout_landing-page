'use strict';

// eslint-disable-next-line
AOS.init();
// eslint-disable-next-line
AOS.init({
  disable: 'phone',
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  delay: 0,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',

});

const menuButton = document.querySelector('.icon--menu');
const menuButtonClose = document.querySelector('.icon--close');
const menuItem = document.querySelectorAll('.nav__item');

menuButton.onclick = () => {
  let time = 200;

  menuItem.forEach((item, index) => {
    item.style.animation = `menu 0.5s ${0.1 + index * 0.1}s`;

    setTimeout(() => {
      item.style.opacity = '1';
    }, time);
    time += 100;
  });
};

menuButtonClose.onclick = () => {
  menuItem.forEach((item) => {
    item.style.animation = '';
    item.style.opacity = '0';
  });
};
