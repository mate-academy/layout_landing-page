document.addEventListener('DOMContentLoaded', function() {
  let phoneIcon = document.querySelector('.header__nav-phone-img');

  phoneIcon.addEventListener('click', function() {
    let phoneNumber = document.querySelector('.header__nav-phone-number').textContent.trim();
    window.location.href = 'tel:' + phoneNumber;
  });
});

const menuButton = document.querySelector('.header__nav-menu');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('open');
});

const closeButton = menu.querySelector('.menu__close');
closeButton.addEventListener('click', () => {
  menu.classList.remove('open');
});
