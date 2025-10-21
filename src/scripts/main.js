'use strict';

// прибираю скрол під менюшкою на мобільном

// window.addEventListener('hashchange', () => {
//   const isMenuOpen = window.location.hash === '#menu';

//   document.body.style.overflow = isMenuOpen ? 'hidden' : '';
// });

// номер телефона при наведенні

(() => {
  const phoneNum = document.getElementById('phone-num');
  const phone = document.getElementById('phone');

  phone.addEventListener('mouseenter', () => {
    phoneNum.classList.remove('hidden');
  });

  phone.addEventListener('mouseleave', () => {
    phoneNum.classList.add('hidden');
  });
})();

// додаю при прокруткі фон для шапки

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');

  if (window.scrollY > 10) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});
