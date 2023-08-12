'use strict';

window.addEventListener('load', applyStylesOnScroll);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const phone = document.querySelector('#icon-phone');
const headerContacts = document.querySelector('#header-contacts');

phone.addEventListener('mouseover', () => {
  headerContacts.classList.add('header__contacts--active');
});

phone.addEventListener('mouseleave', () => {
  const timeout = setTimeout(() => {
    headerContacts.classList.remove('header__contacts--active');
  }, 300);

  headerContacts.addEventListener('mouseover', () => {
    clearTimeout(timeout);
  });
});

headerContacts.addEventListener('mouseleave', () => {
  headerContacts.classList.remove('header__contacts--active');
});

const form = document.querySelector('#contacts-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

window.addEventListener('scroll', applyStylesOnScroll);

const nowOnViewPictures = document.querySelectorAll('.now-on-view__picture');

function applyStylesOnScroll() {
  nowOnViewPictures.forEach(picture => {
    if (window.scrollY + window.innerHeight >= picture.offsetTop) {
      picture.classList.add('animated');
    }
  });
}
