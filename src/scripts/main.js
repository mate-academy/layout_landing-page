'use strict';

const dropdown = document.getElementById('myDropdown');
const trigger = document.querySelector('.dropdown__button');
const trigger2 = dropdown.querySelector('.dropdown__button');
const menu = document.getElementById('myDropdown');
const links = document.getElementsByClassName('link');

trigger.addEventListener('click', (event) => {
  event.preventDefault();

  dropdown.classList.toggle('menu--active');
});

trigger2.addEventListener('click', (event) => {
  event.preventDefault();

  dropdown.classList.toggle('menu--active');
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    menu.classList.remove('menu--active');
  });
};

function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
