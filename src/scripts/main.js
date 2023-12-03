'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const blocks = document.querySelectorAll('.page__section');
  const headerTitle = document.querySelector('.header__title');
  let firstLoad = true;

  function handleScroll() {
    if (firstLoad) {
      headerTitle.style.transform = 'translateX(0)';
      firstLoad = false;
    } else {
      blocks.forEach((block) => {
        const blockTop = block.getBoundingClientRect().top;

        if (blockTop < window.innerHeight - 100) {
          block.style.opacity = '1';
          block.style.transform = 'translateY(0)';
        }
      });
    }
  }

  // Initial check in case some blocks are already in the viewport
  handleScroll();

  // Listen for scroll events
  window.addEventListener('scroll', handleScroll);
});
