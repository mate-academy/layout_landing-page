document.addEventListener('DOMContentLoaded', function() {
  var phoneIcon = document.querySelector('.header__nav-phone-img');

  phoneIcon.addEventListener('click', function() {
    var phoneNumber = document.querySelector('.header__nav-phone-number').textContent.trim();
    window.location.href = 'tel:' + phoneNumber;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.header__nav-menu-img');
  const closeIcon = document.querySelector('.menu__close');
  const menu = document.querySelector('.menu');

  menuIcon.addEventListener('click', function() {
    menu.style.display = 'block';
  });

  closeIcon.addEventListener('click', function() {
    menu.style.display = 'none';
  });
});
