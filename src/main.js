'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const element = document.getElementById('menu__croll');
  const elementBody = document.getElementById('page__body');
  const elementClose = document.getElementById('closeBody');

  element.addEventListener('click', function() {
    elementBody.classList.add('highlight');
  });

  elementClose.addEventListener('click', function() {
    elementBody.classList.remove('highlight');
  });
});
