'use strict';

const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  burger.classList.toggle('active');
});
