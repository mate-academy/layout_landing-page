'use strict';

const main = document.querySelector('main');
const elements = main.querySelectorAll('.recommended, .categories');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;

      el.classList.remove('recommended-from-left');
      el.classList.remove('categories-from-left');
      el.style.opacity = '1';
      el.style.transform = 'translateX(0) translateY(0)';
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.02
});

elements.forEach(el => {
  observer.observe(el);
}
);