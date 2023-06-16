'use strict';

const btnOff = document.querySelector('.icon--menu');
const btnOn = document.querySelector('.icon--close');
const navLink = document.querySelector('.nav__list');

const body = document.body;

function disableScroll() {
  body.classList.add('disable-scroll');
};

function enableScroll() {
  body.classList.remove('disable-scroll');
};

btnOff.addEventListener('click', e => {
  disableScroll();
});

btnOn.addEventListener('click', e => {
  enableScroll();
});

navLink.addEventListener('click', e => {
  enableScroll();
});

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  form.reset();
});
