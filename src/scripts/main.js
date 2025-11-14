'use strict';

const inputs = document.querySelectorAll('.contact__form-textbox');
const form = document.getElementById('contact__form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  inputs.forEach((element) => {
    element.value = '';
  });
});

const topBar = document.querySelector('.top-bar');
const phoneIcon = document.querySelector('.icon--phone');
const phoneInfo = document.querySelector('.phones-info');

phoneIcon.addEventListener('mouseenter', () => {
  phoneInfo.style.display = 'block';
  phoneInfo.style.position = 'absolute';
  phoneInfo.style.right = '30%';
  phoneInfo.style.top = '10px';
});

topBar.addEventListener('mouseleave', () => {
  phoneInfo.style.display = 'none';
});
