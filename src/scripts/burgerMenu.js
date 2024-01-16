const refs = {
  menuIconClose: document.querySelector('.icon--close'),
  asideMenu: document.querySelector('.page__menu'),
  body: document.querySelector('.page__body'),
};

export const openBurgerMenu = function(e) {
  e.preventDefault();
  refs.asideMenu.classList.add('open-menu');
  bodyLock();
  refs.menuIconClose.addEventListener('click', closeBurgerMenu);
};

export const closeBurgerMenu = function(e) {
  e.preventDefault();
  bodyUnlock();
  refs.asideMenu.classList.remove('open-menu');
  refs.menuIconClose.removeEventListener('click', closeBurgerMenu);
};

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document
    .querySelector('.page__body').offsetWidth + 'px';

  refs.body.style.paddingRight = lockPaddingValue;
  refs.body.classList.add('lock');
};

function bodyUnlock() {
  refs.body.style.paddingRight = '0px';
  refs.body.classList.remove('lock');
};
