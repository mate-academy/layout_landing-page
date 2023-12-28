'use strict';

document.addEventListener('scroll', e => {
  const scrollAmount = window.pageYOffset || document.documentElement.scrollTop;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
  const roundScroll = Math.round(scrollPercent);

  const scrollBar = document.querySelector('.scrollBar');

  scrollBar.style.height = scrollPercent + '%';
  scrollBar.querySelector('span').textContent = roundScroll;
});
