const phoneButton = document.querySelector('.header__phone');
const phoneNumber = document.querySelector('.header__phone-number');

if (phoneButton && phoneNumber) {
  phoneButton.addEventListener('click', () => {
    phoneNumber.classList.toggle('active');
  });
}

const menuOpen = document.querySelector('#menuOpen');
const menuClose = document.querySelector('#menuClose');
const menu = document.querySelector('#menu');
const menuLinks = document.querySelectorAll('.menu__nav a');

if (menuOpen && menuClose && menu) {
  menuOpen.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = '';
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

const contactForm = document.querySelector('.contact__form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    contactForm.reset();
  });
}
