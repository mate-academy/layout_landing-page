'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const menu = document.querySelector('.menu');

function openMenu() {
  menu.classList.add('menu--active');
  document.querySelector('.page').classList.add('page--scroll-locked');

  gsap.to(menu, {
    opacity: 1,
    duration: 0.4,
    ease: 'power2.out',
  });

  gsap.from('.menu__item', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
    delay: 0.15,
  });

  gsap.from(['.menu__phone', '.menu__call'], {
    opacity: 0,
    y: 15,
    duration: 0.5,
    stagger: 0.12,
    ease: 'power2.out',
    delay: 0.55,
  });
}

function closeMenu() {
  document.querySelector('.page').classList.remove('page--scroll-locked');

  gsap.to(menu, {
    opacity: 0,
    duration: 0.3,
    ease: 'power2.in',
    onComplete() {
      menu.classList.remove('menu--active');
    },
  });
}

function handleHash() {
  if (window.location.hash === '#menu') {
    openMenu();
  } else if (menu.classList.contains('menu--active')) {
    closeMenu();
  }
}

window.addEventListener('hashchange', handleHash);

window.addEventListener('load', () => {
  handleHash();
  if (window.location.hash && window.location.hash !== '#menu') {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
});

document.querySelectorAll('.menu .nav__link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    closeMenu();

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', targetId);
    }
  });
});

document.querySelector('.menu__close-link').addEventListener('click', (e) => {
  e.preventDefault();
  closeMenu();
  window.history.pushState(null, '', window.location.pathname);
});

document.querySelector('.menu__logo-link').addEventListener('click', (e) => {
  e.preventDefault();
  closeMenu();
  const targetElement = document.querySelector('#top');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
  window.history.pushState(null, '', '#top');
});

gsap.from('.hero__title', {
  opacity: 0,
  y: 40,
  duration: 1.2,
  ease: 'power3.out',
  delay: 0.2,
});

gsap.from('.recommend__title-main', {
  scrollTrigger: {
    trigger: '.recommend',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: 'power2.out',
});

gsap.from('.recommend__card', {
  scrollTrigger: {
    trigger: '.recommend__list',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power2.out',
});

gsap.from('.category__title-main', {
  scrollTrigger: {
    trigger: '.category',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: 'power2.out',
});

document.querySelectorAll('.category__row').forEach((row) => {
  gsap.from(row, {
    scrollTrigger: {
      trigger: row,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
  });
});

gsap.from('.category__cta', {
  scrollTrigger: {
    trigger: '.category__cta',
    start: 'top 90%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  y: 20,
  duration: 0.8,
  ease: 'power2.out',
});

gsap.from('.about__image', {
  scrollTrigger: {
    trigger: '.about',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  y: 40,
  duration: 1.0,
  ease: 'power2.out',
});

gsap.from(['.about__title', '.about__desc'], {
  scrollTrigger: {
    trigger: '.about__container',
    start: 'top 85%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power2.out',
});

gsap.from('.contact__title-main', {
  scrollTrigger: {
    trigger: '.contact',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: 'power2.out',
});

gsap.from(['.contact__form', '.contact__info'], {
  scrollTrigger: {
    trigger: '.contact__container',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power2.out',
});

const contactForm = document.getElementById('contact-form');
const snackbar = document.getElementById('snackbar');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  contactForm.reset();

  gsap.killTweensOf(snackbar);

  gsap.set(snackbar, { visibility: 'visible', pointerEvents: 'auto' });

  gsap.fromTo(
    snackbar,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
  );

  gsap.to(snackbar, {
    opacity: 0,
    y: -10,
    duration: 0.3,
    ease: 'power2.in',
    delay: 2,
    onComplete() {
      gsap.set(snackbar, { visibility: 'hidden', pointerEvents: 'none' });
    },
  });
});
