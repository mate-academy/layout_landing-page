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



document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu__list-nav-link, .menu__list-contact-link");
  const menuClose = document.querySelector(".menu__close");
  const menuToggle = document.querySelector(".header__nav-menu");

  // Function to close the menu
  const closeMenu = () => {
    menu.classList.remove("open");
  };

  const openMenu = () => {
    menu.classList.add("open");
  };

  menuToggle.addEventListener("click", openMenu);

  menuClose.addEventListener("click", closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
});
