const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link');
const contactForm = document.querySelector('.contact-us__form');

function setMenuState(isOpen) {
  menu.classList.toggle('menu--open', isOpen);
  document.body.classList.toggle('menu-open', isOpen);

  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute(
    'aria-label',
    isOpen ? 'Close menu' : 'Open menu',
  );

  menu.setAttribute('aria-hidden', String(!isOpen));
}

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';

    setMenuState(!isOpen);
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuState(false);
    }
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
  });
}
