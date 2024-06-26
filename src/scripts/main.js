'use strict';

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      if(change.target.classList.contains('detail__link--side--left')){
        change.target.classList.add('detail__link--side--left--active');
      }else if(change.target.classList.contains('detail__link--side--right')){
        change.target.classList.add('detail__link--side--right--active');
      }
    }
  });
}

let options = {
  threshold: [0.2] };
let observer = new IntersectionObserver(onEntry, options);
let elements = [...document.querySelectorAll('.detail__link--side--left'), ...document.querySelectorAll('.detail__link--side--right')];

for (let elm of elements) {
  observer.observe(elm);
}
