export function initMenu() {
  const burgerToggle = document.getElementById('burgerToggle');
  const burgerMenu = document.getElementById('burgerMenu');
  const menuLinks = document.querySelectorAll(
    '.burger-menu__link, .burger-menu__button, .header-top__link',
  );
  const body = document.body;

  const openMenu = () => {
    burgerMenu.classList.add('burger-menu--active');
    body.classList.add('no-scroll');
    body.dataset.menu = 'open';
  };

  const closeMenu = () => {
    burgerMenu.classList.remove('burger-menu--active');
    body.classList.remove('no-scroll');
    delete body.dataset.menu;
  };

  const toggleMenu = () => {
    if (burgerMenu.classList.contains('burger-menu--active')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  burgerToggle?.addEventListener('click', toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}
