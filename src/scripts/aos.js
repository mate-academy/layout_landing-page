'use strict';

import AOS from 'aos';
import 'aos/dist/aos.css';

const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

AOS.init({
  duration: 800,
  offset: 100,
  easing: 'ease-out-cubic',
  once: true,
  disable: reducedMotionQuery.matches,
});

reducedMotionQuery.addEventListener('change', () => {
  window.location.reload();
});
