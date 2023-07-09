'use strict';

function onScrollAnimation() {
  const animated = document.querySelectorAll('.animated');

  for (let i = 0; i < animated.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = animated[i].getBoundingClientRect().top;
    const elementVisible = 180;

    if (elementTop < windowHeight - elementVisible) {
      animated[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', e => onScrollAnimation());
