document.addEventListener('DOMContentLoaded', function() {
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

  const hoverColor = '$main-input-hover';

  const inputs = document.querySelectorAll('input, textarea');

  inputs.forEach(function(input) {
    input.addEventListener('focus', function() {
      if (this.value === '') {
        this.style.color = hoverColor;
      }
    });

    input.addEventListener('blur', function() {
      if (this.value === '') {
        this.style.color = '';
      }
    });
  });
});
