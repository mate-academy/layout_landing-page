import { initMenu } from './menu.js';
import { initForm } from './form.js';
import {
  observeAndAnimate,
  getResponsiveThreshold,
} from './animations/observer.js';
import { assignAnimationClasses } from './animations/animationUtils.js';
import { initBikeCardsAnimation } from './animations/bikeCards.js';
import { initHeaderScroll } from './headerScroll.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initForm();
  initBikeCardsAnimation();
  initHeaderScroll();

  // detail cards
  const detailsContainer = document.querySelector('.details__container');
  const detailCards = document.querySelectorAll('.detail-card');

  if (detailsContainer) {
    assignAnimationClasses(detailCards, [
      'animate-left',
      'animate-right',
      'animate-left',
    ]);

    observeAndAnimate({
      targetElement: detailsContainer,
      elementsToAnimate: [...detailCards],
      threshold: getResponsiveThreshold('detailsContainer'),
    });
  }

  // contact info
  const contactContainer = document.querySelector('.contact__container');
  const formAnimation = document.querySelector('.contact__form');
  const contactInfo = document.querySelector('.contact__info');

  if (contactContainer) {
    if (formAnimation) {
      formAnimation.classList.add('animate-left');
    }

    if (contactInfo) {
      contactInfo.classList.add('animate-right');
    }

    observeAndAnimate({
      targetElement: contactContainer,
      elementsToAnimate: [formAnimation, contactInfo],
      threshold: getResponsiveThreshold('contactContainer'),
    });
  }
});
