'use strict';
// block the scroll of the page when the menu is open
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// form management
const form = document.querySelector('form');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  form.reset();
});

// animation when scrolling
const animations = document.querySelectorAll('.animation');

window.addEventListener('scroll', animationOnScroll);

function animationOnScroll() {
  for (let i = 0; i < animations.length; i++) {
    const animEl = animations[i];
    const animElHeight = animEl.offsetHeight;
    const animElOffset = offset(animEl).top;
    const animStart = 4;

    let animElPoint = window.innerHeight - animElHeight / animStart;

    if (animElHeight > window.innerHeight) {
      animElPoint = window.innerHeight - window.innerHeight / animStart;
    }

    if ((window.scrollY > animElOffset - animElPoint)
      && window.scrollY < (animElOffset + animElHeight)) {
      animEl.classList.add('show');
    } else {
      if (!animEl.classList.contains('animation--no-hide')) {
        animEl.classList.remove('show');
      }
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  return {
    top: rect.top + scrollTop, left: rect.left + scrollLeft,
  };
}

setTimeout(() => {
  animationOnScroll();
}, 300);

// animation placeholders
function animatePlaceholder(input) {
  const fullText = input.getAttribute('data-full-placeholder') || input.placeholder;
  if (!fullText) return;
  if (input.classList.contains('placeholder-done')) return; // щоб не запускати повторно

  input.setAttribute('data-full-placeholder', fullText);
  input.placeholder = '';
  let i = 0;

  const type = () => {
    if (i <= fullText.length) {
      input.placeholder = fullText.slice(0, i++);
      setTimeout(type, 100);
    }
  };

  type();
  input.classList.add('placeholder-done');
}

document.querySelectorAll('.placeholder-animation').forEach(input => {
  input.addEventListener('mouseenter', () => {
    animatePlaceholder(input);
  });
});


