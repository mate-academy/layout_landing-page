'use strict';

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__item');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    document.body.classList.add('menu-active');
  } else {
    document.body.classList.remove('menu-active');
  }
});

menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('menu-active');
  });
});
