'use strict';

const menu = document.querySelector('.burger__logo');
const body = document.querySelector('body');
const navItem = document.querySelectorAll(".burger__nav-LIst-Item");

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
});

menu.addEventListener('click', () => {
  console.log(1)
  menu.classList.toggle('active');
  body.classList.toggle('overflow-hidden');
});

navItem.forEach(elem => elem.addEventListener('click', () => {
  menu.classList.remove('active');
  body.classList.remove('overflow-hidden');
}))

