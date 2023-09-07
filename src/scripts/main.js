'use strict';

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('animated-block-show');
    }
  });
}

const options = { threshold: [0.7] };
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.animated-block');

for (const elm of elements) {
  observer.observe(elm);
}
