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

document.getElementById('openMaps').addEventListener('click', function() {
  // eslint-disable-next-line max-len
  window.open('https://www.google.com/maps/place/Limoges,+Prancis/@45.8584921,1.1494858,12z/data=!4m6!3m5!1s0x47f934afe6680461:0x10be4a3159364d11!8m2!3d45.833619!4d1.261105!16zL20vMDE4MHls?entry=ttu', '_blank');
});
