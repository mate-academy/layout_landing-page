'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const phoneIcon = document.querySelector('.header__icon--phone');
  const phoneNumber = document.querySelector('.header__number');

  phoneIcon.addEventListener('mouseover', function() {
    phoneNumber.style.display = 'block';
  });

  phoneIcon.addEventListener('mouseout', function() {
    setTimeout(function() {
      phoneNumber.style.display = 'none';
    }, 1500);
  });

  phoneNumber.addEventListener('mouseover', function() {
    clearTimeout(this.timeoutId);
  });

  phoneNumber.addEventListener('mouseout', function() {
    this.timeoutId = setTimeout(function() {
      phoneNumber.style.display = 'none';
    }, 1500);
  });
});
