'use strict';

document.addEventListener('scroll', function() {
  const blocks = document.querySelectorAll('.main__block-appearance');

  blocks.forEach(function(block) {
    const position = block.getBoundingClientRect();

    if (position.top <= window.innerHeight) {
      block.style.left = '0';
      block.style.opacity = '1';
    }
  });
});
