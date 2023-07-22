const menuBurger = document.getElementById('menuBurger');
const menu = document.getElementById('menu');
const close = document.getElementById('menuclose');
const navigationIcons = document.getElementById('navigationIcons');

menuBurger.addEventListener('click', () => {
  menu.classList.add('menu__top');
  close.classList.add('navigation__close--active');
  navigationIcons.classList.remove('navigation__icons--active');
});

close.addEventListener('click', () => {
  menu.classList.remove('menu__top');
  close.classList.remove('navigation__close--active');
  navigationIcons.classList.add('navigation__icons--active');
});
