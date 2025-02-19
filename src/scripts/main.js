'use strict';

const isFirefox = navigator.userAgent.indexOf('Firefox') !== -1;
const isSafari =
  navigator.userAgent.indexOf('Safari') !== -1 &&
  navigator.userAgent.indexOf('Chrome') === -1;

if (isSafari || isFirefox) {
  document.querySelector('.header').style.animation = 'none';
  document.querySelector('.header').style.animationTimeline = 'none';
  document.querySelector('.header').style.animationRange = 'none';
}
