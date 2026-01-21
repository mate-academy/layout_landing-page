"use strict";

const page = document.documentElement;
const tooltip = document.querySelector('.tooltip');
const phoneBtn = document.querySelector('.icon--phone');


if (tooltip && phoneBtn){
  phoneBtn.addEventListener('mouseenter', () => {
    tooltip.classList.add('is-open');
  });

  document.addEventListener('click', (e) => {
    if (tooltip.classList.contains('is-open')&&
       !phoneBtn.contains(e.target) &&
       !tooltip.contains(e.target)) {

      tooltip.classList.remove('is-open');
    }
  });
}

