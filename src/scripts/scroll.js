'use strict';

class SmoothScroll {
  constructor(selector = 'a[href^="#"]', duration = 300) {
    this.selector = selector;
    this.duration = duration;
    this.init();
  }

  scrollTo(targetY) {
    const startY = window.pageYOffset;
    const diff = targetY - startY;
    let startTime;

    const step = timestamp => {
      if (!startTime) startTime = timestamp;
      const time = timestamp - startTime;
      const progress = Math.min(time / this.duration, 1);
      const currentY = startY + diff * progress; // линейный прогресс
      window.scrollTo(0, currentY);
      if (time < this.duration) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  bindLinks() {
    document.querySelectorAll(this.selector).forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;
        if (href.startsWith('#')) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();

            // закрыть попап, если он есть
            const closeBtn = document.querySelector('#navigation-close');
            if (closeBtn) closeBtn.click();

            // убрать якорь из URL
            history.replaceState(null, '', window.location.pathname + window.location.search);

            // отключить встроенный smooth
            document.documentElement.style.scrollBehavior = 'auto';

            // подождать, пока попап полностью закроется
            setTimeout(() => {
              const targetY = target.getBoundingClientRect().top + window.pageYOffset;
              this.scrollTo(targetY);
            }, 250);

            // вернуть scroll-behavior
            setTimeout(() => {
              document.documentElement.style.scrollBehavior = '';
            }, this.duration);
          }
        }
      });
    });
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.bindLinks());
    } else {
      this.bindLinks();
    }
  }
}
