const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = document.querySelectorAll('.mobile-menu__link');

openBtn.addEventListener('click', (e) => {
  e.preventDefault();
  mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});
