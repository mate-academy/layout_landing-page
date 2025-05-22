import { assignAnimationClasses } from './animationUtils.js';
import { observeAndAnimate, getResponsiveThreshold } from './observer.js';

export function initBikeCardsAnimation() {
  const compareContainer = document.querySelector('.compare__container');
  const bikeCards = document.querySelectorAll('.bike-card');

  if (!compareContainer || bikeCards.length === 0) {
    return;
  }

  function updateBikeCardAnimations() {
    const isWide = window.innerWidth > 1260;

    const variants = isWide
      ? ['animate-left', 'animate-bottom', 'animate-right']
      : ['animate-left', 'animate-right', 'animate-left'];

    assignAnimationClasses(bikeCards, variants);
  }

  updateBikeCardAnimations();

  observeAndAnimate({
    targetElement: compareContainer,
    elementsToAnimate: [...bikeCards],
    threshold: getResponsiveThreshold('compareContainer'),
  });

  window.addEventListener('resize', () => {
    updateBikeCardAnimations();
  });
}
