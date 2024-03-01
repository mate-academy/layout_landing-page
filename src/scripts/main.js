'use strict';

const phoneIcon = document.getElementById('phone-icon');
const phoneNumber = document.getElementById('phone-number');

if (phoneIcon && phoneNumber) {
  phoneNumber.style.display = 'none';

  phoneIcon.addEventListener('mouseover', function() {
    phoneNumber.style.display = 'block';
  });

  phoneIcon.addEventListener('mouseout', function() {
    phoneNumber.style.display = 'none';
  });
}
