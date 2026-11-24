'use strict';

const header = document.querySelector('.header');

if (header) {
  const toggleHeader = () => {
    header.classList.toggle('header--active');
    document.body.classList.toggle('locked');
  };

  const showHeader = () => {
    header.classList.add('header--active');
    document.body.classList.add('locked');
  };

  const hideHeader = () => {
    header.classList.remove('header--active');
    document.body.classList.remove('locked');
  };

  const addScrollClass = () => {
    header.classList.toggle('header--scroll', window.scrollY > 0);
  };

  const burger = document.querySelector('.header__burger');

  if (burger) {
    burger.addEventListener('click', toggleHeader);
  }

  const headerLinks = document.querySelectorAll('.menu__link');

  if (headerLinks.length !== 0) {
    headerLinks[0].addEventListener('focus', showHeader);

    headerLinks.forEach((headerLink) => {
      headerLink.addEventListener('click', hideHeader);
    });
  }

  const menuOrder = document.querySelector('.menu__order');

  if (menuOrder) {
    menuOrder.addEventListener('blur', hideHeader);

    const menuOrderSpan = menuOrder.querySelector('span');

    if (menuOrderSpan) {
      menuOrderSpan.style.minWidth = menuOrderSpan.offsetWidth + 'px';
    }
  }

  addScrollClass();
  window.addEventListener('scroll', addScrollClass);
}
