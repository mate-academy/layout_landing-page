const refs = {
  menuIconClose: document.querySelector('.icon--close'),
  asideMenu: document.querySelector('.page__menu'),
};

export const openBurgerMenu = function(e) {
  e.preventDefault();
  refs.asideMenu.classList.add('open-menu');
  refs.menuIconClose.addEventListener('click', closeBurgerMenu);
};

export const closeBurgerMenu = function(e) {
  e.preventDefault();
  refs.asideMenu.classList.remove('open-menu');
  refs.menuIconClose.removeEventListener('click', closeBurgerMenu);
};
