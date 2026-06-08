'use strict';

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }

);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
