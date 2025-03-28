'use strict';

const html = document.querySelector('html');

function handleClick() {
  html.classList.toggle('unscroll');
}

document.querySelector('.icon--burger').addEventListener('click', handleClick);
document.querySelector('.icon--close').addEventListener('click', handleClick);
document.querySelector('.nav__list').addEventListener('click', handleClick);
