'use strict';

const effectDuration = 1000;

function load() {
  document.getElementById('loader').style.opacity = '0';

  setTimeout(function() {
    document.getElementById('loader').remove();
  }, effectDuration);
}

window.onload = load();

// eslint-disable-next-line
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('anim--show');
    }
  });
}, {
  threshold: 0.3,
});

const animElements = document.querySelectorAll('.anim');

animElements.forEach(element => {
  observer.observe(element);
});
