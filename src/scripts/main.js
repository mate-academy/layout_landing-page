document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const btnOpen = document.getElementById('menu-open');
  const btnClose = document.getElementById('menu-close');
  const menuLinks = document.querySelectorAll('.menu__link');

  if (btnOpen && btnClose && menu) {
    btnOpen.addEventListener('click', () => {
      menu.classList.add('menu--open');
    });

    btnClose.addEventListener('click', () => {
      menu.classList.remove('menu--open');
    });

    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('menu--open');
      });
    });
  }
});
