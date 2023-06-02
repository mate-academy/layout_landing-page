'use strict';

const menuBlockPhones = document.querySelector('.menu-block__phones');
const menuBlockIconPhone = document.querySelector('.menu-block__icon--phone');
const form = document.querySelector('.form-field');

if (window.innerWidth >= 1280) {
  menuBlockIconPhone.addEventListener('mouseover', function() {
    menuBlockPhones.style.opacity = '1';
  });

  menuBlockPhones.addEventListener('mouseleave', function() {
    menuBlockPhones.style.opacity = '0';
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
