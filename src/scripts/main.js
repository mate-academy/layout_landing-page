/* global IntersectionObserver */
'use strict';

const elements = document.querySelectorAll(
  '.pre-animation--right, .pre-animation--left, .pre-animation--appear',
);

const observer = new IntersectionObserver((blocks, obsrver) => {
  blocks.forEach((block) => {
    if (block.isIntersecting) {
      if (block.target.classList.contains('pre-animation--right')) {
        block.target.classList.add('animation--right');
      }

      if (block.target.classList.contains('pre-animation--left')) {
        block.target.classList.add('animation--left');
      }

      if (block.target.classList.contains('pre-animation--appear')) {
        block.target.classList.add('animation--appear');
      }

      observer.unobserve(block.target);
    }
  });
});

elements.forEach((element) => {
  observer.observe(element);
});
