'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // burger menu logic
  (() => {
    const burgerButton = document.querySelector('.header__burger-button');
    const header = document.querySelector('.header');

    if (burgerButton) {
      burgerButton.addEventListener('click', () => {
        document.documentElement.classList.toggle('menu-open');
      });
    }

    if (header) {
      header.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
          document.documentElement.classList.remove('menu-open');
        }
      });
    }
  })();

  // Header-Scroll
  (function headerScroll() {
    let scrollPos = window.scrollY;
    const header = document.querySelector('header.header');

    const addScroll = () => header.classList.add('header-scroll');
    const removeScroll = () => header.classList.remove('header-scroll');

    window.addEventListener('scroll', () => {
      scrollPos = window.scrollY;

      if (scrollPos > 0) {
        addScroll();
      } else {
        removeScroll();
      }
    });
  })();

  (function navScroll() {
    const headerHeight = document.querySelector('.header').offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          const targetPosition
            = targetElement.getBoundingClientRect().top
            + window.pageYOffset
            - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
      });
    });
  })();
});
