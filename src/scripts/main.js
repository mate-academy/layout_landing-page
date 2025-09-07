/* global IntersectionObserver */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll(
    // eslint-disable-next-line max-len
    '.recommended__product, .section-title, .category, .categories__button, .about-us__description, .contact-us__content',
  );

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  elements.forEach((el) => observer.observe(el));
});
