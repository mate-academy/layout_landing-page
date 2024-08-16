'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  document.getElementById('form').reset();
});

const loadingElement = document.querySelector('.loading');
const nextSection = document.querySelector('.header');

setTimeout(() => {
  if (loadingElement) {
    loadingElement.classList.add('hidden');


    setTimeout(() => {
      newFunction();

      nextSection.scrollIntoView({ behavior: 'smooth' });

      function newFunction() {
        loadingElement.remove();
      }
    }, 900);
  }
}, 3000);


setTimeout(() => {
  gsap.fromTo(
    '.header__title',
    {
      opacity: 0,
      y: 50
    }, {
      y: 0,
      opacity: 1,
      duretion: 2,
      delay: 0.5,
    }
  )
}, 3003);

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.product__photo-container').forEach((element) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 50
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
      scrollTrigger: {
        trigger: element,
        start: 'top 70%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      }
    }
  );
});

gsap.utils.toArray('.categories__photo-container').forEach((element) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 50
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
      scrollTrigger: {
        trigger: element,
        start: 'top 70%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      }
    }
  );
});

gsap.utils.toArray('.page__section--title').forEach((element) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: -100
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      delay: 0.7,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
      }
    }
  );
});


gsap.fromTo(
  '.about__description',
  {
    opacity: 0,
    x: 100
  },
  {
    opacity: 1,
    x: 0,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.about__description',
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play none none reverse',
    }
  }
);

gsap.fromTo(
  '.contacts__container',
  {
    opacity: 0,
    y: 50
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: '.contacts__container',
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play none none reverse',
    }
  }
);
