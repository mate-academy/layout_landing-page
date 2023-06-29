'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const send = document.querySelector('#button');

send.addEventListener('click', checkboxClick, false);

function checkboxClick(event) {
  const warn = "preventDefault() won't let you check this!<br>";

  document.getElementById('output-box').innerHTML += warn;
  event.preventDefault();
}
