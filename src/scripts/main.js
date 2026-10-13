document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.header__icons__burguer');
  const closeBtn = document.querySelector('#menu-close');
  const menuOverlay = document.querySelector('#menu-overlay');
  const menuLinks = document.querySelectorAll('.menu__link');
  const body = document.body;

  const setMenuState = (isOpen) => {
    body.classList.toggle('menu-open', isOpen);
    menuOverlay.classList.toggle('menu--open', isOpen);
  };

  if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
      setMenuState(true);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      setMenuState(false);
    });
  }

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });
});
