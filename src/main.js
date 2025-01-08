'use strict';

const page = document.querySelector('.page__body');
const linkBloсkScroll = document.querySelector('.icon--menu');
const endBlockScroll = document.querySelector('.icon--close');

linkBloсkScroll.addEventListener('click', () => {
  page.classList.add('hidden');
});

endBlockScroll.addEventListener('click', () => {
  page.classList.remove('hidden');
});
