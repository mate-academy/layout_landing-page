'use strict';

const body = document.querySelector('.page__content');

window.addEventListener('scroll', addPointerEventsForFooter);

function addPointerEventsForFooter() {
  if (
    document.documentElement.scrollTop > (document.documentElement.scrollHeight * 0.7)
  ) {
    body.style.pointerEvents = 'none';
    console.log('true');
  } else {
    body.style.pointerEvents = 'all';
    console.log('false');
  }
}
