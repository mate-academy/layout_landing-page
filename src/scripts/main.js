document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.nav__link, .menu__close, .menu__logo-link');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.location.hash === '#menu') {
        window.location.hash = '#';
      }
    });
  });
});
