/* eslint-disable no-undef */
'use strict';

const sections = document.querySelectorAll('.sect');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

sections.forEach((sec) => observer.observe(sec));
