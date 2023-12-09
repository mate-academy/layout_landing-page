'use strict';

const number = document.querySelector('.icon--phone-number');
const phone = document.querySelector('.icon--phone');

phone.onmouseover = function addClassActive() {
  number.classList.toggle('active');
};

phone.onmouseout = function addClassActive() {
  number.classList.toggle('active');
};
