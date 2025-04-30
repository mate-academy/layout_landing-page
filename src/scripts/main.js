'use strict';

const dropdown = document.querySelector('.top-bar__dropdown');
const phone = document.querySelector('.top-bar__phone');

phone.addEventListener('mouseover', () => {
  dropdown.classList.add('top-bar__dropdown--active');
});

phone.addEventListener('mouseleave', () => {
  dropdown.classList.remove('top-bar__dropdown--active');
});
