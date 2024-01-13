import { animOnScroll } from './animOnScroll';

const animItems = document.querySelectorAll('.js-anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
}

setTimeout(() => {
  animOnScroll();
}, 300);
