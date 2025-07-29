document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.header__menu-toggle');
  const menuClose = document.querySelector('.menu__close');
  const menu = document.getElementById('main-menu');

  if (menuToggle && menuClose && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.add('is-active');
    });

    menuClose.addEventListener('click', () => {
      menu.classList.remove('is-active');
    });
  }
});
