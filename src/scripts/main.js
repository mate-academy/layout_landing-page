const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.menu');
const logo = document.querySelector('.menu__logo');
const anchorLinks = document.querySelectorAll('.nav__link');

burgerIcon.addEventListener('click', (e) => {
  e.preventDefault();
  burgerIcon.classList.toggle('is-open');
  burgerMenu.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
});

logo.addEventListener('click', (e) => {
  e.preventDefault();
  burgerIcon.classList.remove('is-open');
  burgerMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
});

anchorLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    burgerIcon.classList.remove('is-open');
    burgerMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });

      burgerIcon.classList.remove('is-open');
      burgerMenu.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  });
});
