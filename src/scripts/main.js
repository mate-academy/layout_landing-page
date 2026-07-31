const bodyElement = document.body;
const menuItem = document.querySelector('#menu');
const menuOpenBtn = document.querySelector('#menu-open-button');
const menuCloseBtn = document.querySelector('#menu-close-button');

const toggleMenu = (isOpen) => {
  menuItem.classList.toggle('menu--visible', isOpen);
  bodyElement.classList.toggle('body--menu-open', isOpen);
  menuOpenBtn.setAttribute('aria-expanded', String(isOpen));
  menuItem.setAttribute('aria-hidden', String(!isOpen));

  if (isOpen) {
    menuItem.removeAttribute('inert');
  } else {
    menuItem.setAttribute('inert', '');
  }
};

toggleMenu(false);

menuOpenBtn.addEventListener('click', () => {
  toggleMenu(true);
});

menuCloseBtn.addEventListener('click', () => {
  toggleMenu(false);
});
