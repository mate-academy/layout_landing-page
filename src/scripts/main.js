'use strict';
// #region top-bar
document.addEventListener('DOMContentLoaded', () => {
  const phoneIcon = document.querySelector('.icon--phone');
  const topBarPopup = document.querySelector('.top-bar__popup');

  phoneIcon.addEventListener('click', () =>
    topBarPopup.classList.toggle('popup--visible'),
  );
});
// #endregion

// #region preventDefault
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});
// #endregion

// #region hidden scroll
const menu = document.getElementById('menu');
const showButton = document.getElementById('show');
const closeButton = document.getElementById('close');

const openMenu = () => {
  menu.style.display = 'block';
  document.body.classList.add('hide');
};

const closeMenu = () => {
  menu.style.display = 'none';
  document.body.classList.remove('hide');
};

showButton.addEventListener('click', () => openMenu());

closeButton.addEventListener('click', () => closeMenu());
// #endregion
