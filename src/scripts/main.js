const menuLinks = document.querySelectorAll('.nav__link');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.location.hash === '#menu') {
      window.location.hash = link.getAttribute('href');
    }
  });
});
