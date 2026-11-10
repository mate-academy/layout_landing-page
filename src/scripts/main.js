'use strict';

// Reveal blocks when they scroll into view.
// Elements are marked in HTML with the data-reveal attribute.
const items = document.querySelectorAll('[data-reveal]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  items.forEach((item) => {
    item.classList.add('reveal');
    observer.observe(item);
  });
}
