document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('open-menu');
  const closeBtn = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks = document.querySelectorAll('.mobile-menu__link');

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.add('active');
    document.body.classList.add('no-scroll');
  });

  closeBtn?.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });
});
