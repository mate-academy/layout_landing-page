'use strict';

document.querySelector('#contactForm').onsubmit = (e) => {
  e.preventDefault();
  e.target.reset();
};
