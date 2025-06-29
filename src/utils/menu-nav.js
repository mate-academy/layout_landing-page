const showMenu = () => {
  const menu = document.querySelector('.menu');
  const openBtn = document.querySelector('.menu__top-open-btn');
  const closeBtn = document.querySelector('.menu__top-close-btn');
  const menuLinks = document.querySelectorAll('.menu__link');

  // State
  let isMobileNavOpen = false;

  openBtn.addEventListener('click', () => {
    isMobileNavOpen = !isMobileNavOpen;
    menu.style.display = isMobileNavOpen ? 'block' : 'none';
    document.body.style.overflowY = isMobileNavOpen ? 'hidden' : 'auto';
  });

  closeBtn.addEventListener('click', () => {
    isMobileNavOpen = false;
    menu.style.display = 'none';
    document.body.style.overflowY = 'auto';
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      isMobileNavOpen = false;
      menu.style.display = isMobileNavOpen ? 'block' : 'none';
      document.body.style.overflowY = isMobileNavOpen ? 'hidden' : 'auto';
    });
  });
};

export default showMenu;
