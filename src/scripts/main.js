'use strict';

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', onButtonClick);

function onButtonClick(event) {
  event.preventDefault();
  event.target.reset();
}
