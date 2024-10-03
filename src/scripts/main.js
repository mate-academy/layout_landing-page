'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const phoneIcon = document.querySelector('.icon--phone');
  const phoneNumber = document.querySelector('.top-bar__phone-number');

  phoneIcon.addEventListener('mouseenter', function () {
    phoneNumber.classList.add('visible');
  });

  phoneIcon.addEventListener('mouseleave', function () {
    phoneNumber.classList.remove('visible');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const phoneIcon = document.querySelector('.icon--phone');
  const phoneNumber = document.querySelector('.top-bar__phone-number');
  const menu = document.getElementById('menu');
  const closeMenuIcon = document.querySelector('.icon--close');

  phoneIcon.addEventListener('mouseenter', function () {
    phoneNumber.classList.add('visible');
  });

  phoneIcon.addEventListener('mouseleave', function () {
    phoneNumber.classList.remove('visible');
  });

  document.querySelector('.icon--menu').addEventListener('click', function () {
    menu.style.right = '0';
    document.body.style.overflow = 'hidden';
  });

  closeMenuIcon.addEventListener('click', function () {
    menu.style.right = '-1000%';
    document.body.style.overflow = '';
  });
});
