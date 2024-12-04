const menu = document.getElementById('menu');
const menuToggle = document.querySelector('.icon--menu');
const closeMenu = document.querySelector('.icon--close');

menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
  menu.style.visibility = 'visible';
  menu.style.opacity = '1';
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
  menu.style.opacity = '0';

  setTimeout(() => {
    menu.style.visibility = 'hidden';
  }, 500);
  document.body.style.overflow = 'auto';
});

document.addEventListener('DOMContentLoaded', () => {
  const headerTitle = document.querySelector('.header__title');

  headerTitle.classList.add('visible');
});
