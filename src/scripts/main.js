const phone = document.querySelector('.header__phone');
const phoneWrapper = document.querySelector('.header__phone-wrapper');

phone.addEventListener('click', () => {
  const isOpen = phoneWrapper.classList.toggle('is-open');

  phone.setAttribute('aria-expanded', isOpen);
});

const menuButton = document.querySelector('.header__menu');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__link, .menu__test-ride');

function openMenu() {
  menu.classList.add('is-open');
  menu.setAttribute('aria-hidden', 'false');
  menuButton.setAttribute('aria-expanded', 'true');
  menuButton.setAttribute('aria-label', 'Close menu');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menu.classList.remove('is-open');
  menu.setAttribute('aria-hidden', 'true');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
  document.body.style.overflow = '';
}

menuButton.addEventListener('click', openMenu);

closeButton.addEventListener('click', closeMenu);

menu.addEventListener('click', (event) => {
  if (event.target === menu) {
    closeMenu();
  }
});

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.classList.contains('is-open')) {
    closeMenu();
  }
});
