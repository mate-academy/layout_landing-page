'use strict';

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);

    history.pushState('', document.title, window.location.pathname + window.location.search);

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
