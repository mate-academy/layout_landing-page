document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const backdrop = document.getElementById('menu-backdrop');
  const burgerBtn = document.querySelector('.icon--burger');
  const closeBtn = document.querySelector('.icon--close');

  if (!menu || !burgerBtn || !backdrop) {
    return;
  }

  const openMenu = () => {
    menu.classList.add('menu--open');
    backdrop.classList.add('menu-backdrop--visible');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.classList.remove('menu--open');
    backdrop.classList.remove('menu-backdrop--visible');
    document.body.style.overflow = '';
  };

  burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openMenu();
  });

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
  });

  backdrop.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  document.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  const menuLogoLink = document.querySelector('#menu .top-bar a');

  if (menuLogoLink) {
    menuLogoLink.addEventListener('click', closeMenu);
  }

  const phoneToggle = document.getElementById('phone-toggle');
  const phonePopupContent = document.getElementById('phone-popup-content');

  if (phoneToggle && phonePopupContent) {
    phoneToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      phonePopupContent.classList.toggle('is-open');
    });

    document.addEventListener('click', (e) => {
      if (!phonePopupContent.contains(e.target) && e.target !== phoneToggle) {
        phonePopupContent.classList.remove('is-open');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        phonePopupContent.classList.remove('is-open');
      }
    });
  }

  const contactForm = document.querySelector('.contact__form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.reset();
    });
  }
});
