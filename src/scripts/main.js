'use strict';

const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.top-menu');
const headerContacts = document.querySelector('.header__contacts');
const headerOptions = document.querySelectorAll('.top-menu__option');

function makeActive() {
  document.body.classList.toggle('--lock');
  header.classList.toggle('--active');
  headerBurger.classList.toggle('--active');
  headerMenu.classList.toggle('--active');
  headerContacts.classList.toggle('--hidden');
}

headerBurger.addEventListener('click', makeActive);

for (const option of headerOptions) {
  option.addEventListener('click', makeActive);
}

window.addEventListener('scroll', function () {
  const scrollTop = this.window.pageYOffset;

  if (scrollTop !== 0) {
    header.classList.add('--scrolled');
  } else {
    if (header.classList.contains('--scrolled')) {
      header.classList.remove('--scrolled');
    }
  }
});
